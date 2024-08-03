import image from "../../../assets/images/icon-thank-you.svg";
function Success() {
  return (
    <>
      <div className="personal-info-section">
        <div className="success-panel">
          <div className="success-image">
            <img src={image} alt="" />
          </div>
          <div className="success-content">
            <h3>Thank you!</h3>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Success;
