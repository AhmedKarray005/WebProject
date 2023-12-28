// Feedback.js

export default function Feedback() {
    return (<div>
    <div id="feedback">
      <div className="flex">
        {/* Feedback Form on the left */}
        <div className="absolute mt-52 ml-48 w-80 float-left border-2 p-2 rounded-xl shadow-xl text-xl">
          <form>
            <p className="text-2xl">Feedback & Queries</p>
            <div>
              <label className="text-sm">Select Issue*</label>
              <br></br>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                defaultValue="-- Select Your Query --"
              >
                <option value="-- Select Your Query --">-- Select Your Query --</option>
                <option value="Feedback">Feedback</option>
                <option value="Course Related Queries">Course Related Queries</option>
                <option value="Payment Related Issue">Payment Related Issue</option>
                <option value="Hiring Related Queries">Hiring Related Queries</option>
                <option value="Advertise With Us">Advertise With Us</option>
              </select>
              <br></br>
              <label className="text-sm">Email Address*</label>
              <br></br>
              <input
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                type="email"
                placeholder="abc@geeksforgeeks.org"
              />
              <br></br>
              <label className="text-sm">Contact No.</label>
              <br></br>
              <input
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                type="text"
                placeholder="1324567890"
              />
              <br></br>
              <label className="text-sm">Drop Your Query</label>
              <br></br>
              <textarea
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                rows="4"
                cols="25"
                maxLength="300"
                placeholder="Max Allowed Characters: 300"
              ></textarea>
              <br></br>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
        </div>
  <div id="feed">
        {/* Google Maps Iframe on the right */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1534.1591756455084!2d10.268394017987069!3d36.845748189485064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4aae6a7f82d7%3A0xd9c3a204fca1385f!2sMediterranean%20Institute%20Of%20Technology%20(MEDTECH)!5e0!3m2!1sen!2stn!4v1700872360232!5m2!1sen!2stn"
          width="800"
          height="600"
          style={{ border: 0, marginLeft: "50%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div></div>
    );
  }
  