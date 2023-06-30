import Image from "next/image";
import miniLogo from "../public/asset4.png";
import customDivider from "../public/asset5.png";
import servicecard1 from "../public/asset12.png";
export default function Services() {
  return (
    <div className="services-container">
      <div className="section-container">
        <div className="services-logo-title mb-8">
          <Image
            className="mini-logo-image mb-2 mx-auto"
            src={miniLogo}
            alt="small logo"
          />
          <h3 className="text-[#003EAC] text-3xl font-extrabold text-center">
            Our Services
          </h3>
          <Image
            className="divider-image mx-auto"
            src={customDivider}
            alt="small logo"
          />
        </div>
        <div className="services-cards">
          <div className="service-card">
            <div className="service-card-image">
              <Image width={120} src={servicecard1} />
            </div>
            <h4 className="service-card-title">Web Development</h4>
            <p className="service-card-description">
              Our team of qualified UI/UX designers can answer your needs. It
              offers an extensive selection of services, such as designing UI/UX
              for Apps.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-image">
              <Image width={120} src={servicecard1} />
            </div>
            <h4 className="service-card-title">Web Development</h4>
            <p className="service-card-description">
              Our team of qualified UI/UX designers can answer your needs. It
              offers an extensive selection of services, such as designing UI/UX
              for Apps.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-image">
              <Image width={120} src={servicecard1} />
            </div>
            <h4 className="service-card-title">Web Development</h4>
            <p className="service-card-description">
              Our team of qualified UI/UX designers can answer your needs. It
              offers an extensive selection of services, such as designing UI/UX
              for Apps.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-image">
              <Image width={120} src={servicecard1} />
            </div>
            <h4 className="service-card-title">Web Development</h4>
            <p className="service-card-description">
              Our team of qualified UI/UX designers can answer your needs. It
              offers an extensive selection of services, such as designing UI/UX
              for Apps.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-image">
              <Image width={120} src={servicecard1} />
            </div>
            <h4 className="service-card-title">Web Development</h4>
            <p className="service-card-description">
              Our team of qualified UI/UX designers can answer your needs. It
              offers an extensive selection of services, such as designing UI/UX
              for Apps.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-image">
              <Image width={120} src={servicecard1} />
            </div>
            <h4 className="service-card-title">Web Development</h4>
            <p className="service-card-description">
              Our team of qualified UI/UX designers can answer your needs. It
              offers an extensive selection of services, such as designing UI/UX
              for Apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
