import Image from "next/image"

export default function ContactPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: "20px" }}>
        <span>Home</span>
        <span style={{ margin: "0 5px" }}>-</span>
        <span>Pages</span>
        <span style={{ margin: "0 5px" }}>-</span>
        <span style={{ color: "#ff0066" }}>Contact us</span>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
        {/* Information Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Information About us</h2>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet lectus.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#6B4CE6" }}></div>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF0066" }}></div>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#4CE6B6" }}></div>
          </div>
        </div>

        {/* Contact Way Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Contact Way</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#6B4CE6" }}></div>
              <div>
                <div>Tel: 877-67-88-99</div>
                <div style={{ color: "#666" }}>E-Mail: shop@store.com</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#FF0066" }}></div>
              <div>
                <div>Support Forum</div>
                <div style={{ color: "#666" }}>For over 24hr</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#FFA566" }}></div>
              <div>
                <div>20 Margaret st, London</div>
                <div style={{ color: "#666" }}>Great Britain, 3NM98-LK</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#4CE6B6" }}></div>
              <div>
                <div>Free standard shipping</div>
                <div style={{ color: "#666" }}>on all orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Get In Touch</h2>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum.
          </p>
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input
              type="text"
              placeholder="Your Name*"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px"
              }}
            />
            <input
              type="email"
              placeholder="Your Email*"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px"
              }}
            />
            <input
              type="text"
              placeholder="Subject*"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px"
              }}
            />
            <textarea
              placeholder="Type Your Message*"
              rows={5}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px"
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF0066",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                alignSelf: "flex-start"
              }}
            >
              Send Mail
            </button>
          </form>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src="/picture/g10.png"
            alt="Contact illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

