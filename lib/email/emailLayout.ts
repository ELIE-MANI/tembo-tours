export function emailLayout(
  title: string,
  content: string
) {
  return `
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
  </head>

  <body
    style="
      margin:0;
      padding:0;
      background:#f5f5f5;
      font-family:Arial,Helvetica,sans-serif;
    "
  >

    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="padding:40px 20px;"
    >
      <tr>
        <td align="center">

          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="
              background:#ffffff;
              border-radius:12px;
              overflow:hidden;
              box-shadow:0 5px 20px rgba(0,0,0,.08);
            "
          >

            <!-- Header -->

            <tr>
              <td
                align="center"
                style="
                  background:#0B3D1F;
                  padding:30px;
                "
              >
                <h1
                  style="
                    color:white;
                    margin:0;
                    font-size:28px;
                  "
                >
                  Tembo Travels
                </h1>

                <p
                  style="
                    color:#D4A017;
                    margin-top:8px;
                  "
                >
                  Discover Rwanda Differently
                </p>
              </td>
            </tr>

            <!-- Content -->

            <tr>
              <td
                style="
                  padding:40px;
                  color:#333333;
                  line-height:1.7;
                "
              >
                ${content}
              </td>
            </tr>

            <!-- Footer -->

            <tr>
              <td
                align="center"
                style="
                  background:#f8f8f8;
                  padding:25px;
                  font-size:14px;
                  color:#666;
                "
              >

                <strong>Tembo Travels</strong>

                <br />

                Kigali, Rwanda

                <br />

                🌍 www.tembotravels.rw

                <br />

                📞 +250 794 107 972

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>

  </html>
  `;
}