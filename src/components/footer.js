export default function Footer() {
  return (
    <footer className="pt-4 pb-4 lg:pt-8 lg:pb-8 bg-grey">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="opacity-100">
              5602 George St., Unit 4, Niagara Falls, Ontario, L2E 3E2 | <a href="tel:905-354-0184">905-354-0184</a> |{" "}
              <a href="mailto:info@viscaelectric.ca">info@viscaelectric.ca</a>
            </p>
          </div>
          <div className="flex flex-1 justify-normal lg:justify-end">
            <p className="opacity-100">
              {new Date().getFullYear()} 2024 VISCA electric |{" "}
              <a target="_blank" href="https://www.termsfeed.com/live/f736d78e-6b52-4a55-9166-96e055ab23d6">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="infused">
                  Website by Infused Agency
                  <a href="https://infused.agency" target="_blank" title="Web Design St. Catharines">
                    Web Design St. Catharines
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency" target="_blank" title="Web Design Grimsby">
                    Web Design Grimsby
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency/beamsville-web-design" target="_blank" title="Web Design Beamsville">
                    Web Design Beamsville
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency/web-design-welland" target="_blank" title="Web Design Welland">
                    Web Design Welland
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency/fort-erie-web-design" target="_blank" title="Web Design Fort Erie">
                    Web Design Fort Erie
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://infused.agency/port-colborne-web-design"
                    target="_blank"
                    title="Web Design Port Colborne"
                  >
                    Web Design Port Colborne
                  </a>
                </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
