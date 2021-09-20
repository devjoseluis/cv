import type { NextPage } from "next";
import { Icon } from "@iconify/react";

const Home: NextPage = () => {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h3 className="hello subtitle has-text-primary has-text-centered is-uppercase">
              Hola Mundo.
            </h3>
            <h1 className="name title has-text-centered">Soy José Morales.</h1>
            <h2 className="job-title has-text-centered is-uppercase">
              <span>Desarrollador Web Front-End</span>
            </h2>
            <a
              href="/Curriculum.pdf"
              target="_blank"
              className="download-btn button is-medium is-primary is-outlined has-text-white is-uppercase"
            >
              <span className="icon">
                <Icon icon="mdi:file-download-outline" />
              </span>
              Descargar CV
            </a>
            <p className="social buttons is-centered has-addons">
              <a
                href="https://www.linkedin.com/in/devjoseluis"
                aria-label="Ver mi perfil en LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="button is-primary is-inverted is-outlined linkedin-btn"
              >
                <span className="icon">
                  <Icon icon="mdi:linkedin" />
                </span>
              </a>
              <a
                href="https://github.com/devjoseluis"
                aria-label="Ver mi perfil en Github"
                target="_blank"
                rel="noopener noreferrer"
                className="button is-primary is-inverted is-outlined github-btn"
              >
                <span className="icon">
                  <Icon icon="mdi:github-circle" />
                </span>
              </a>
              <a
                href="mailto:hola@josemorales.dev"
                aria-label="Ponte en contacto hola@josemorales.dev"
                className="button is-primary is-inverted is-outlined mailto-btn"
              >
                <span className="icon">
                  <Icon icon="mdi:email-outline" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Hecho con{" "}
            <span role="img" aria-label="heart emoji">
              🖤
            </span>{" "}
            en <strong>Guatemala</strong>
          </p>
          <p>
            Fuentes por{" "}
            <a
              href="https://fonts.google.com/"
              aria-label="Google Fonts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                style={{ display: "inline-block", verticalAlign: "middle" }}
                width="121"
                height="22"
                version="1.1"
                id="google-fonts-logo"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 209.302 38.052"
                enableBackground="new 0 0 209.302 38.052"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M14.976,29.52c-2.641,0-5.136-0.672-7.488-2.016c-2.352-1.32-4.188-3.12-5.508-5.4C0.66,19.848,0,17.4,0,14.76
                 c0-2.616,0.66-5.052,1.98-7.308c1.344-2.304,3.18-4.116,5.508-5.436C9.84,0.672,12.335,0,14.976,0c3.888,0,7.26,1.356,10.116,4.068
                 l-2.844,2.844c-2.064-1.919-4.488-2.88-7.272-2.88c-2.976,0-5.484,1.044-7.524,3.132c-2.041,2.064-3.06,4.596-3.06,7.596
                 c0,3,1.02,5.532,3.06,7.596c2.04,2.088,4.548,3.132,7.524,3.132c2.568,0,4.728-0.696,6.48-2.088c1.8-1.416,2.856-3.396,3.168-5.94
                 h-9.648v-4.032h13.572c0.144,0.72,0.216,1.561,0.216,2.52c0,4.081-1.296,7.356-3.888,9.828C22.26,28.272,18.959,29.52,14.976,29.52
                 z M49.284,20.016c0,2.664-0.924,4.92-2.772,6.768c-1.824,1.824-4.081,2.736-6.768,2.736c-2.688,0-4.944-0.912-6.768-2.736
                 c-1.849-1.848-2.772-4.104-2.772-6.768c0-2.711,0.912-4.968,2.736-6.768c1.824-1.824,4.092-2.736,6.804-2.736
                 c2.688,0,4.944,0.913,6.768,2.736C48.36,15.048,49.284,17.304,49.284,20.016z M34.38,20.016c0,1.633,0.516,3,1.548,4.104
                 c1.031,1.104,2.304,1.656,3.816,1.656c1.488,0,2.748-0.552,3.78-1.656c1.056-1.127,1.584-2.496,1.584-4.104
                 c0-1.679-0.516-3.047-1.548-4.104c-1.032-1.104-2.304-1.656-3.816-1.656c-1.512,0-2.785,0.552-3.816,1.656
                 C34.896,16.968,34.38,18.336,34.38,20.016z M70.092,20.016c0,2.664-0.924,4.92-2.772,6.768c-1.824,1.824-4.08,2.736-6.768,2.736
                 c-2.688,0-4.945-0.912-6.768-2.736c-1.849-1.848-2.772-4.104-2.772-6.768c0-2.711,0.912-4.968,2.736-6.768
                 c1.824-1.824,4.092-2.736,6.804-2.736c2.688,0,4.943,0.913,6.768,2.736C69.168,15.048,70.092,17.304,70.092,20.016z M55.188,20.016
                 c0,1.633,0.516,3,1.548,4.104c1.032,1.104,2.304,1.656,3.816,1.656c1.488,0,2.748-0.552,3.78-1.656
                 c1.056-1.127,1.584-2.496,1.584-4.104c0-1.679-0.517-3.047-1.548-4.104c-1.032-1.104-2.304-1.656-3.816-1.656
                 c-1.512,0-2.785,0.552-3.816,1.656C55.704,16.968,55.188,18.336,55.188,20.016z M81,38.052c-0.96,0-1.872-0.138-2.736-0.414
                 c-0.864-0.276-1.662-0.66-2.394-1.152c-0.732-0.492-1.375-1.08-1.926-1.764c-0.552-0.684-1.008-1.446-1.368-2.286l3.636-1.512
                 c0.432,1.008,1.068,1.824,1.908,2.448c0.84,0.624,1.8,0.936,2.88,0.936c3.384,0,5.076-1.992,5.076-5.976V27.36h-0.144
                 c-1.201,1.44-2.868,2.16-5.004,2.16c-2.425,0-4.561-0.924-6.408-2.772c-1.8-1.872-2.7-4.104-2.7-6.696c0-2.616,0.9-4.86,2.7-6.732
                 c1.824-1.872,3.96-2.808,6.408-2.808c2.136,0,3.803,0.708,5.004,2.124h0.144v-1.548h3.96v17.064c0,3.168-0.798,5.61-2.394,7.326
                 C86.045,37.193,83.832,38.052,81,38.052z M75.996,20.052c0,1.608,0.504,2.964,1.512,4.068c1.032,1.104,2.292,1.656,3.78,1.656
                 c1.416,0,2.616-0.54,3.6-1.62c0.984-1.128,1.476-2.496,1.476-4.104c0-1.632-0.492-3.012-1.476-4.14
                 c-0.96-1.104-2.16-1.656-3.6-1.656s-2.688,0.564-3.744,1.692C76.512,17.052,75.996,18.42,75.996,20.052z M92.916,1.008h4.176
                 v27.936h-4.176V1.008z M108.54,29.52c-2.688,0-4.932-0.912-6.732-2.736c-1.8-1.823-2.7-4.08-2.7-6.768
                 c0-2.711,0.852-4.979,2.556-6.804c1.728-1.8,3.864-2.7,6.408-2.7c0.936,0,1.824,0.144,2.664,0.432
                 c0.84,0.288,1.608,0.702,2.304,1.242c0.696,0.54,1.314,1.182,1.854,1.926c0.54,0.744,0.978,1.561,1.314,2.448l0.432,1.08
                 l-12.708,5.256c0.984,1.92,2.52,2.88,4.608,2.88c1.944,0,3.504-0.876,4.68-2.628l3.24,2.16C114.54,28.116,111.9,29.52,108.54,29.52
                 z M108.216,14.184c-1.296,0-2.472,0.528-3.528,1.584c-1.008,1.032-1.488,2.352-1.44,3.96l8.496-3.528
                 c-0.24-0.6-0.684-1.085-1.332-1.458C109.764,14.37,109.032,14.184,108.216,14.184z"
                  />
                  <path d="M130.463,17.892v11.052h-3.312V3.168H142.2v3.168h-11.736v8.46h10.584v3.096H130.463z" />
                  <path
                    d="M143.279,20.124c0-2.712,0.852-4.956,2.556-6.732c1.728-1.776,3.9-2.664,6.516-2.664c2.616,0,4.775,0.888,6.48,2.664
                 c1.728,1.776,2.592,4.02,2.592,6.732c0,2.736-0.864,4.98-2.592,6.732c-1.705,1.776-3.864,2.664-6.48,2.664
                 c-2.616,0-4.788-0.888-6.516-2.664C144.131,25.08,143.279,22.836,143.279,20.124z M146.591,20.124c0,1.896,0.552,3.432,1.656,4.608
                 c1.104,1.176,2.472,1.764,4.104,1.764c1.632,0,3-0.587,4.104-1.764c1.104-1.176,1.656-2.712,1.656-4.608
                 c0-1.872-0.552-3.396-1.656-4.572c-1.128-1.2-2.497-1.8-4.104-1.8c-1.608,0-2.976,0.6-4.104,1.8
                 C147.143,16.728,146.591,18.252,146.591,20.124z"
                  />
                  <path
                    d="M164.087,11.304h3.168v2.448h0.144c0.504-0.864,1.278-1.584,2.322-2.16s2.13-0.864,3.258-0.864
                 c2.16,0,3.821,0.618,4.986,1.854c1.164,1.236,1.746,2.994,1.746,5.274v11.088h-3.312V18.072c-0.072-2.88-1.524-4.32-4.356-4.32
                 c-1.32,0-2.424,0.534-3.312,1.602c-0.888,1.068-1.332,2.346-1.332,3.834v9.756h-3.312V11.304z"
                  />
                  <path
                    d="M189.683,29.232c-1.44,0-2.634-0.444-3.582-1.332c-0.948-0.888-1.435-2.124-1.458-3.708v-9.864h-3.096v-3.024h3.096v-5.4
                 h3.312v5.4h4.32v3.024h-4.32v8.784c0,1.176,0.228,1.975,0.684,2.394c0.456,0.42,0.972,0.63,1.548,0.63
                 c0.264,0,0.522-0.03,0.774-0.09c0.252-0.06,0.486-0.138,0.702-0.234l1.044,2.952C191.843,29.076,190.835,29.232,189.683,29.232z"
                  />
                  <path
                    d="M209.302,24.048c0,1.536-0.672,2.832-2.016,3.888c-1.345,1.056-3.036,1.584-5.076,1.584c-1.776,0-3.336-0.462-4.68-1.386
                 c-1.345-0.923-2.304-2.142-2.88-3.654l2.953-1.26c0.432,1.057,1.062,1.878,1.89,2.466c0.828,0.588,1.733,0.882,2.718,0.882
                 c1.056,0,1.938-0.228,2.646-0.684c0.707-0.456,1.062-0.996,1.062-1.62c0-1.127-0.864-1.956-2.592-2.484l-3.024-0.756
                 c-3.432-0.864-5.147-2.52-5.147-4.968c0-1.607,0.653-2.898,1.962-3.87c1.308-0.972,2.981-1.458,5.021-1.458
                 c1.561,0,2.971,0.372,4.23,1.116c1.26,0.744,2.142,1.74,2.646,2.988l-2.951,1.224c-0.337-0.744-0.883-1.326-1.639-1.746
                 s-1.602-0.63-2.538-0.63c-0.863,0-1.638,0.216-2.321,0.648c-0.685,0.432-1.026,0.96-1.026,1.584c0,1.008,0.948,1.728,2.844,2.16
                 l2.664,0.684C207.55,19.62,209.302,21.384,209.302,24.048z"
                  />
                </g>
              </svg>
            </a>
          </p>
          <p>
            Fotografía por{" "}
            <a
              style={{
                backgroundColor: "black",
                color: "white",
                textDecoration: "none",
                padding: "4px 6px",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif",
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: "1.2",
                display: "inline-block",
                borderRadius: "3px",
              }}
              href="https://unsplash.com/@mieldalabeja?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
              target="_blank"
              rel="noopener noreferrer"
              title="Download free do whatever you want high-resolution photos from Mel Elías"
            >
              <span style={{ display: "inline-block", padding: "2px 3px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    height: "12px",
                    width: "auto",
                    position: "relative",
                    verticalAlign: "middle",
                    top: "-2px",
                    fill: "white",
                  }}
                  viewBox="0 0 32 32"
                >
                  <title>unsplash-logo</title>
                  <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
              </span>
              <span style={{ display: "inline-block", padding: "2px 3px" }}>
                Mel Elías
              </span>
            </a>
          </p>
          <p>
            Íconos por{" "}
            <a
              href="https://materialdesignicons.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="has-text-black"
            >
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <path
                  fill="#000"
                  d="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z"
                ></path>
              </svg>
              Material Design Icons
            </a>
          </p>
          <p>
            <a
              href="https://bulma.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://bulma.io/images/made-with-bulma--black.png"
                alt="Made with Bulma"
                width="160"
                height="30"
              />
            </a>
          </p>
          <p>
            Deploys by{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                aria-label="Vercel Inc."
                height="20"
                viewBox="0 0 283 64"
                fill="#000"
              >
                <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z" />
              </svg>
            </a>
          </p>
          <p>
            Código fuente en{" "}
            <a
              href="https://github.com/devjoseluis/jmorales-cv"
              aria-label="Repositorio en Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Github Logo"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                width="74"
                height="20"
                style={{ verticalAlign: "top" }}
              />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
