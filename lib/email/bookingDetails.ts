export function bookingDetailsTemplate(data: any) {
  return `
    <div style="background:#f8f9fa;padding:20px;border-radius:8px;margin:20px 0;">

      <h3 style="margin-top:0;color:#0B3D1F;">
        Booking Details
      </h3>

      <p>
        <strong>Booking Type:</strong>
        ${data.bookingType || "-"}
      </p>

      ${data.destination ? `
      <p>
        <strong>Destination:</strong>
        ${data.destination}
      </p>
      ` : ""}

      ${data.packageType ? `
      <p>
        <strong>Package:</strong>
        ${data.packageType}
      </p>
      ` : ""}

      ${data.travelDate ? `
      <p>
        <strong>Travel Date:</strong>
        ${data.travelDate}
      </p>
      ` : ""}

      ${data.travelers ? `
      <p>
        <strong>Travelers:</strong>
        ${data.travelers}
      </p>
      ` : ""}

      ${data.checkIn ? `
      <p>
        <strong>Check-In:</strong>
        ${data.checkIn}
      </p>
      ` : ""}

      ${data.checkOut ? `
      <p>
        <strong>Check-Out:</strong>
        ${data.checkOut}
      </p>
      ` : ""}

      ${data.roomType ? `
      <p>
        <strong>Room Type:</strong>
        ${data.roomType}
      </p>
      ` : ""}

      ${data.guests ? `
      <p>
        <strong>Guests:</strong>
        ${data.guests}
      </p>
      ` : ""}

      ${data.departure ? `
      <p>
        <strong>Departure:</strong>
        ${data.departure}
      </p>
      ` : ""}

      ${data.arrival ? `
      <p>
        <strong>Arrival:</strong>
        ${data.arrival}
      </p>
      ` : ""}

      ${data.travelClass ? `
      <p>
        <strong>Travel Class:</strong>
        ${data.travelClass}
      </p>
      ` : ""}

      ${data.vehicleType ? `
      <p>
        <strong>Vehicle Type:</strong>
        ${data.vehicleType}
      </p>
      ` : ""}

      ${data.pickupDate ? `
      <p>
        <strong>Pickup Date:</strong>
        ${data.pickupDate}
      </p>
      ` : ""}

      ${data.returnDate ? `
      <p>
        <strong>Return Date:</strong>
        ${data.returnDate}
      </p>
      ` : ""}

    </div>
  `;
}