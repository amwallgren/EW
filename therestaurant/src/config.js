export const providerURL = "http://localhost:3000";
export const contractAddress = "0x68929FafDe86FAA5e412290C2bE10f6e6902715E";
export const contractABI = [
  /*constructor*/{
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  /*BookingCreated - event*/{
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "BookingCreated",
    type: "event",
  },
  /*DeletedBooking - event*/{
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "DeletedBooking",
    type: "event",
  },
  /*GotBookings - event*/{
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    name: "GotBookings",
    type: "event",
  },
  /*RestaurantCreated - event*/{
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "RestaurantCreated",
    type: "event",
  },
  /*UpdatedBooking - event*/{
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numberOfGuests",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "restaurantId",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Restaurants.Booking",
        name: "booking",
        type: "tuple",
      },
    ],
    name: "UpdatedBooking",
    type: "event",
  },
  /*bookingCount - function*/{
    inputs: [],
    name: "bookingCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  /*bookings - function*/{
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bookings",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numberOfGuests",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "restaurantId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  /*restaurantCount - function*/{
    inputs: [],
    name: "restaurantCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  /*restaurants - function*/{
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "restaurants",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  /*createRestaurant - function*/{
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "createRestaurant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  /*createBooking - function*/{
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfGuests",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "restaurantId",
        type: "uint256",
      },
    ],
    name: "createBooking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  /*getBookings - function*/{
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getBookings",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  /*editBooking - function*/{
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numberOfGuests",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "editBooking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  /*removeBooking - function*/{
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "removeBooking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
