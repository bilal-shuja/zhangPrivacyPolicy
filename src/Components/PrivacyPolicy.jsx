import React from 'react';
import PrivacyPolicyImage from './endpoint-pana.svg';

const PrivacyPolicy = () => {
  return (
    <>
        <div className="container p-5">
        <h3
          style={{ fontFamily: "Metropolis , -apple-system", color: "363D47" }}
        >
         Privacy Policy
        </h3>
        <hr />

        <div className="row">
          <div className="col-lg-8">
            <p style={{ color: "#69707A" }}>
            Thank you for choosing Icate, the mobile application designed to provide users with the convenience of purchasing coffee while earning cryptocurrency rewards. Protecting your privacy is paramount to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our mobile application, including the data you provide and the data we collect automatically.
            </p>

            <hr />

            <div className="cookie-section d-flex align-self-center">
              <i
                className="fa-solid fa-circle-arrow-right fs-3 me-2"
                style={{ color: "#dc392d" }}
              />
              <h3
                style={{
                  fontFamily: "Metropolis , -apple-system",
                  color: "363D47",
                }}
              >
               Information We Collect
              </h3>
            </div>
            <p style={{ color: "#69707A" }}>
            Personal Information: We may collect personal information such as your name, email address, phone number, and payment information when you register an account with Icate, make purchases, or communicate with us.
            </p>
            <p style={{ color: "#69707A" }}>
            Usage Data: We automatically collect certain information about your device, including your mobile device's unique device ID, IP address, operating system, browser type, mobile network information, and usage information about how you interact with our application.
            </p>

            <p style={{ color: "#69707A" }}>
            Location Information: With your consent, we may collect precise location data through GPS, Wi-Fi, or cellular network information to provide location-based services, such as finding nearby coffee shops.
            </p>

            <hr />
            <div className="cookie-section d-flex align-self-center">
              <i
                className="fa-solid fa-circle-arrow-right fs-3 me-2"
                style={{ color: "#dc392d" }}
              />
              <h3
                style={{
                  fontFamily: "Metropolis , -apple-system",
                  color: "363D47",
                }}
              >
                How We Use Your Information
              </h3>
            </div>
            <p style={{ color: "#69707A" }}>
            Provide and Maintain the Service: We use the information collected to operate, maintain, and improve our mobile application, including processing transactions, providing customer support, and personalizing your experience.
            </p>

            <p style={{ color: "#69707A" }}>
            Communicate with You: We may use your email address or phone number to send you transactional and promotional communications, such as order confirmations, updates, and marketing messages. You can opt-out of receiving marketing communications at any time.
            </p>

            <p style={{ color: "#69707A" }}>
            Protect Rights and Property: We may use your information to protect the rights, property, or safety of Icate, our users, or others, as required or permitted by law.
            </p>

            <hr />
            <div className="cookie-section d-flex align-self-center">
              <i
                className="fa-solid fa-circle-arrow-right fs-3 me-2"
                style={{ color: "#dc392d" }}
              />
              <h3
                style={{
                  fontFamily: "Metropolis , -apple-system",
                  color: "363D47",
                }}
              >
                Sharing Your Information
              </h3>
            </div>

            <p style={{ color: "#69707A" }}>
            Service Providers: We may share your information with third-party service providers who assist us in providing and maintaining our mobile application, processing payments, or performing other tasks necessary to operate our business.
            </p>

            <p style={{ color: "#69707A" }}>
            Legal Compliance: We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests.
            </p>

            <p style={{ color: "#69707A" }}>
            Business Transfers: If Icate is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information is transferred and becomes subject to a different Privacy Policy.
            </p>

            <hr />

            <div className="cookie-section d-flex align-self-center">
              <i
                className="fa-solid fa-circle-arrow-right fs-3 me-2"
                style={{ color: "#dc392d" }}
              />
              <h3
                style={{
                  fontFamily: "Metropolis , -apple-system",
                  color: "363D47",
                }}
              >
               Data Retention
              </h3>
            </div>

            <p style={{ color: "#69707A" }}>
            We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
            </p>

            <hr />
            <div className="cookie-section d-flex align-self-center">
              <i
                className="fa-solid fa-circle-arrow-right fs-3 me-2"
                style={{ color: "#dc392d" }}
              />
              <h3
                style={{
                  fontFamily: "Metropolis , -apple-system",
                  color: "363D47",
                }}
              >
                Security
              </h3>
            </div>

            <p style={{ color: "#69707A" }}>
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <hr />

            <div className="cookie-section d-flex align-self-center">
              <i
                className="fa-solid fa-circle-arrow-right fs-3 me-2"
                style={{ color: "#dc392d" }}
              />
              <h3
                style={{
                  fontFamily: "Metropolis , -apple-system",
                  color: "363D47",
                }}
              >
               Updates to This Privacy Policy
              </h3>
            </div>

            <p style={{ color: "#69707A" }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>


            <hr />

            <div className="cookie-section d-flex align-self-center">
              <i
                className="fa-solid fa-circle-arrow-right fs-3 me-2"
                style={{ color: "#dc392d" }}
              />
              <h3
                style={{
                  fontFamily: "Metropolis , -apple-system",
                  color: "363D47",
                }}
              >
                Refund Policy
              </h3>
            </div>

            <p style={{ color: "#69707A" }}>


              <h6 style={{ color: "#69707A" }}>Contact Us:</h6>

              <p style={{ color: "#69707A" }}>

              If you have any questions or concerns about this Privacy Policy reach out to our customer support team.
              </p>
                   
              <p style={{ color: "#69707A" }}>
              By using the Icate mobile application, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>


            </p>
          </div>

          <div className="col-lg-4">
            <img src={PrivacyPolicyImage} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy