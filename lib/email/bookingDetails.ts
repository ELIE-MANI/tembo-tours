export function bookingDetailsTemplate(data: any) {
  return `
    <div style="
      background:#f8f9fa;
      padding:20px;
      border-radius:8px;
      margin:20px 0;
    ">

      <h3 style="
        margin-top:0;
        color:#0B3D1F;
      ">
        Booking Details
      </h3>

      <!-- Customer Information -->

      <h4 style="color:#0B3D1F;margin-bottom:10px;">
        Customer Information
      </h4>

      <p>
        <strong>First Name:</strong>
        ${data.firstName || "-"}
      </p>

      <p>
        <strong>Last Name:</strong>
        ${data.lastName || "-"}
      </p>

      <p>
        <strong>Email:</strong>
        ${data.email || "-"}
      </p>

      <p>
        <strong>Phone:</strong>
        ${data.phone || "-"}
      </p>

      <!-- Booking Type -->

      <p>
        <strong>Booking Type:</strong>
        ${data.bookingType || "-"}
      </p>

      <!-- Tour Guide -->

      ${
        data.bookingType === "guide"
          ? `
            <h4 style="
              color:#0B3D1F;
              margin-top:25px;
              margin-bottom:10px;
            ">
              Tour Guide Preferences
            </h4>

            <p>
              <strong>Guide Gender:</strong>
              ${data.guideGender || "-"}
            </p>

            <p>
              <strong>Preferred Language:</strong>
              ${data.language || "-"}
            </p>

            <p>
              <strong>Destination:</strong>
              ${data.destination || "-"}
            </p>

            <p>
              <strong>Travel Date:</strong>
              ${data.travelDate || "-"}
            </p>

            <p>
              <strong>Travelers:</strong>
              ${data.travelers || "-"}
            </p>
          `
          : ""
      }

      <!-- Existing Tour Booking -->

      ${
        data.bookingType === "tour"
          ? `
            ${
              data.destination
                ? `
                  <p>
                    <strong>Destination:</strong>
                    ${data.destination}
                  </p>
                `
                : ""
            }

            ${
              data.packageType
                ? `
                  <p>
                    <strong>Package:</strong>
                    ${data.packageType}
                  </p>
                `
                : ""
            }

            ${
              data.travelDate
                ? `
                  <p>
                    <strong>Travel Date:</strong>
                    ${data.travelDate}
                  </p>
                `
                : ""
            }

            ${
              data.travelers
                ? `
                  <p>
                    <strong>Travelers:</strong>
                    ${data.travelers}
                  </p>
                `
                : ""
            }
          `
          : ""
      }

      <!-- Hotel Booking -->

      ${
        data.bookingType === "hotel"
          ? `
            ${
              data.checkIn
                ? `
                  <p>
                    <strong>Check-In:</strong>
                    ${data.checkIn}
                  </p>
                `
                : ""
            }

            ${
              data.checkOut
                ? `
                  <p>
                    <strong>Check-Out:</strong>
                    ${data.checkOut}
                  </p>
                `
                : ""
            }

            ${
              data.roomType
                ? `
                  <p>
                    <strong>Room Type:</strong>
                    ${data.roomType}
                  </p>
                `
                : ""
            }

            ${
              data.guests
                ? `
                  <p>
                    <strong>Guests:</strong>
                    ${data.guests}
                  </p>
                `
                : ""
            }
          `
          : ""
      }

      <!-- Ticket Booking -->

      ${
        data.bookingType === "ticket"
          ? `
            ${
              data.departure
                ? `
                  <p>
                    <strong>Departure:</strong>
                    ${data.departure}
                  </p>
                `
                : ""
            }

            ${
              data.arrival
                ? `
                  <p>
                    <strong>Arrival:</strong>
                    ${data.arrival}
                  </p>
                `
                : ""
            }

            ${
              data.travelClass
                ? `
                  <p>
                    <strong>Travel Class:</strong>
                    ${data.travelClass}
                  </p>
                `
                : ""
            }
          `
          : ""
      }

      <!-- Vehicle Booking -->

      ${
        data.bookingType === "vehicle"
          ? `
            ${
              data.vehicleType
                ? `
                  <p>
                    <strong>Vehicle Type:</strong>
                    ${data.vehicleType}
                  </p>
                `
                : ""
            }

            ${
              data.pickupDate
                ? `
                  <p>
                    <strong>Pickup Date:</strong>
                    ${data.pickupDate}
                  </p>
                `
                : ""
            }

            ${
              data.returnDate
                ? `
                  <p>
                    <strong>Return Date:</strong>
                    ${data.returnDate}
                  </p>
                `
                : ""
            }
          `
          : ""
      }

      ${
  data.bookingType === "driver"
    ? `
      <h4 style="
        color:#0B3D1F;
        margin-top:25px;
        margin-bottom:10px;
      ">
        Driver Service Details
      </h4>

      <p>
        <strong>Driver Gender:</strong>
        ${data.driverGender || "-"}
      </p>

      <p>
        <strong>Preferred Language:</strong>
        ${data.language || "-"}
      </p>

      <p>
        <strong>Service Type:</strong>
        ${data.serviceType || "-"}
      </p>

      <p>
        <strong>Pickup Location:</strong>
        ${data.pickupLocation || "-"}
      </p>

      <p>
        <strong>Destination:</strong>
        ${data.destination || "-"}
      </p>

      <p>
        <strong>Travel Date:</strong>
        ${data.travelDate || "-"}
      </p>

      <p>
        <strong>Passengers:</strong>
        ${data.passengers || "-"}
      </p>
    `
    : ""
}

      <!-- Special Requests -->

      ${
        data.requests
          ? `
            <h4 style="
              color:#0B3D1F;
              margin-top:25px;
              margin-bottom:10px;
            ">
              Additional Requests
            </h4>

            <p>
              ${data.requests}
            </p>
          `
          : ""
      }

    </div>
  `;
}