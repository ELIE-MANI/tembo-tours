export function bookingTemplate(data: any) {
  return `
    <h2>New ${data.bookingType.toUpperCase()} Booking</h2>

    <hr/>

    <p><strong>First Name:</strong> ${data.firstName}</p>

    <p><strong>Last Name:</strong> ${data.lastName}</p>

    <p><strong>Email:</strong> ${data.email}</p>

    <p><strong>Phone:</strong> ${data.phone}</p>

    <hr/>

    <pre>
${JSON.stringify(data, null, 2)}
    </pre>
  `;
}