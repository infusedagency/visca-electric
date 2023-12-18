export default function Footer() {
  return (
    <footer className="pt-4 pb-4 lg:pt-8 lg:pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="opacity-100">
              5602 George St.Niagara Falls, Ontario, L2E 3E2 | <a href="tel:905-354-0184">905-354-0184</a> |{" "}
              <a href="mailto:info@viscaelectric.ca">info@viscaelectric.ca</a>
              <br />
              <a href="https://infused.agency" target="_blank">
                Niagara Web Design by Infused Agency
              </a>
            </p>
          </div>
          <div className="flex flex-1 justify-normal lg:justify-end">
            <p className="opacity-100">
              &copy; 2024 Visca Electric |{" "}
              <a target="_blank" href="https://www.termsfeed.com/live/f736d78e-6b52-4a55-9166-96e055ab23d6">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
