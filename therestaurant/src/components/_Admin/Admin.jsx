// admin login features in order to be able to edit bookings go here
import Web3 from 'web3';
import { contractABI, contractAddress} from '../../config';
import { useState, useEffect } from 'react';
import './Admin.css';

export const Admin = () => {

    //States to connect page to ganache and get restaurant
    const [account, setAccount] = useState();
    const [contract, setContract] = useState();
    const [connected, setConnected] = useState(false);
    const [restaurant, setRestaurant] = useState([]);
    
    //State that concernes managing bookings
    const [bookings, setBookings] = useState([]);
    const [bookingFormModal, setBookingFormModal] = useState(false);
    // const [editBookingModal, setEditBookingModal] = useState(false);

    //Bookingform states
    const [numOfGuests, setNumOfGuests] = useState("");
    const [guestName, setGuestName] = useState("");
    const [guestDate, setGuestDate] = useState("");
    const [guestTime, setGuestTime] = useState("");
    const [restaurantID, setRestaurantID] = useState(0);

    useEffect(() => {
        async function connect() {
            const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            const restaurantContract = new web3.eth.Contract(contractABI, contractAddress);
            setContract(restaurantContract);
            populateRestaurants(restaurantContract);
            populateBookings(restaurantContract);
            setConnected(true);
        };
    
        if (!connected) {
            connect();
        };
    }, [connected]);

    //managing and gets restaurants from blockchain
    const populateRestaurants = async (contract) => {
        let tempRestaurant = [];

        let restaurantCountId = await contract.methods.restaurantCount().call();
        console.log(restaurantCountId);

        for(let i = 1; i <= restaurantCountId; i++) {
            let currentRestaurants = await contract.methods.restaurants(i).call();
            console.log(currentRestaurants);

            if(currentRestaurants.id > 0) {
                tempRestaurant.push(currentRestaurants);
                setRestaurantID(currentRestaurants.id);
            };
        };
        setRestaurant(tempRestaurant);
    };

    //managing and gets bookings from blockchain
    const populateBookings = async (contract) => {
        let tempBookings = [];

        let bookingsCountId = await contract.methods.bookingCount().call();
        // console.log(bookingsCountId);

        for(let i = 0; i <= bookingsCountId; i++) {
            let currentBookings = await contract.methods.bookings(i).call();
            // console.log(currentBookings);

            if(currentBookings.id > 0) {
                tempBookings.push(currentBookings);
                // setRestaurantID(currentRestaurants.id);
            };
        };
        setBookings(tempBookings);
    };

    //creates new restaurant object
    const makeRestaurant = async (e) => {
        e.preventDefault();
        await contract.methods.createRestaurant("Ew")
        .send({from: account})
        .once("receipt", async (receipt) => {
            console.log(receipt);
            populateRestaurants(contract);  
        });
    };

    //show booking form modal
    const showBookings = (e) => {
        e.preventDefault();
        setBookingFormModal(true);
    }

    //close booking form modal
    const closeBookings = (e) => {
        e.preventDefault();
        setBookingFormModal(false);
    }

    // //show edit bookings modal
    // const showEditBookings = async () => {
    //     // e.preventDefault();
    //     setEditBookingModal(true);


    // }

    // const closeEditBookings = () => {
    //     // e.preventDefault();
    //     setEditBookingModal(false);
    // }

    //create a booking
    const addBooking = async (numOfGuests, name, date, time, resID, e) => {
        e.preventDefault();
        // console.log(numOfGuests, name, date, time, resID);
        let guestNum = parseInt(numOfGuests);
        let guestTime =  parseInt(time);
        let restuarantId = parseInt(resID);

        await contract.methods.createBooking(guestNum, name, date, guestTime, restuarantId)
        .send({from: account})
        .once("receipt", async (receipt) => {
            console.log(receipt);
            populateRestaurants(contract);  
        });
    };

    //Shoe restaurant info
    const restaurantHtml = restaurant.map((res)=> {
        return ( <div key={res.id}>
            <div>{res.name}</div>
            <div>{res.id}</div>
        </div>);
    });

    //show bookings on screen
    const bookingsHtml = bookings.map((book) => {
        return ( <ul key={book.id}>
            <li>Name: {book.name}</li>
            <li>Number of guests: {book.numberOfGuests}</li>
            <li>Time: {book.time}</li>
            <li>Date: {book.date}</li>
            {/* <button onClick={()=> showEditBookings(book.id, book.numberOfGuests, book.name, book.date, book.time)}>Edit booking</button> */}
        </ul>)
    });

    console.log(bookings);
    return (
        <div>
            {/* Restaurant stuff */}
            <div>
                <h2>Account: {account}</h2>
                <h2>Restaurants: {restaurantHtml}</h2>
                <button onClick={makeRestaurant}>Create Restaurant</button>
            </div>

            {/* booking stuff */}
            <div>
                <button onClick={showBookings}>Create booking</button><br></br>
                <button>See bookings</button>
            </div>

            {/* Booking Form Modal stuff*/}
            <div>
                {bookingFormModal && (
                    <div className="admin-bookingForm-modal">
                    <div className="admin-bookingForm-overlay"></div>
                    <div className="admin-bookingForm-content">
                        <p>Bookings form</p>
                        <form >
                            <input 
                            type="text"
                            placeholder='Number of guests'
                            value={numOfGuests}
                            onChange={(e) => {setNumOfGuests(e.target.value)}} />
                            <br />
                            <input 
                            type="text"
                            placeholder='Name'
                            value={guestName}
                            onChange={(e) => {setGuestName(e.target.value)}} />
                            <br />
                            <input 
                            type="text"
                            placeholder='Date'
                            value={guestDate}
                            onChange={(e) => {setGuestDate(e.target.value)}} />
                            <br />
                            <input 
                            type="text"
                            placeholder='Time'
                            value={guestTime}
                            onChange={(e) => {setGuestTime(e.target.value)}} />
                            <br />
                            <button onClick={(e) => addBooking(numOfGuests, guestName, guestDate, guestTime, restaurantID, e)}>Add booking</button>
                        </form>

                        <button onClick={closeBookings} className='close-admin-bookingForm'>Close</button>
                    </div>
                </div>
                )}
            </div>
            
            {/* Edit bookings modal */}
            
            <div>
                {bookingsHtml}
            </div>   
        </div>
    )
}