import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/visitUs")({
  component: ContactUs,
});

function ContactUs() {
  return (
    <>
      <div className="flex justify-center items-center w-full mb-10">
        <div className="w-1/3">
          <div className="text-center mt-4">
            <h3 className="text-4xl font-bold mb-6">Visit Us</h3>
            <p className="mt-2">4918 Anderson Road, Kelowna, BC</p>
            <p className="mt-2">Phone: 250-491-2766</p>
            <p className="mt-2">Email: info@ancienthillwinery.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mt-10">Opening Hours</h3>
            <p className="mt-2">10:30am - 5:30pm</p>
          </div>

          <h2 className="text-2xl font-bold text-center mt-4 mb-6">
            Directions
          </h2>
          <div className="border-2 border-[#5B3003] rounded-lg">
            <iframe
              className="w-full h-[50vh]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.9956922734928!2d-119.3526146!3d49.955183299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537ded042a179495%3A0xdc59eaa069c96ab0!2sAncient%20Hill%20Winery!5e0!3m2!1sen!2sca!4v1708583062616!5m2!1sen!2sca"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
