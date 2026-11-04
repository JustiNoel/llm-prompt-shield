import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/docs.css?raw";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: "PromptShield API - Swagger UI" }] }),
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="swagger-ui">
        <div className="swagger-ui text-[#3b4151] [container-name:swagger-ui] [container-type:inline-size]">
          <div>
            <svg className={"svg-assets [&]:absolute"} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <symbol viewBox="0 0 20 20" id="unlocked">
                  <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                </symbol>
                <symbol viewBox="0 0 20 20" id="locked">
                  <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z" />
                </symbol>
                <symbol viewBox="0 0 20 20" id="close">
                  <path d="M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z" />
                </symbol>
                <symbol viewBox="0 0 20 20" id="large-arrow">
                  <path d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z" />
                </symbol>
                <symbol viewBox="0 0 20 20" id="large-arrow-down">
                  <path d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                </symbol>
                <symbol viewBox="0 0 20 20" id="large-arrow-up">
                  <path d="M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z" />
                </symbol>
                <symbol viewBox="0 0 24 24" id="jump-to">
                  <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
                </symbol>
                <symbol viewBox="0 0 24 24" id="expand">
                  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                </symbol>
                <symbol viewBox="0 0 15 16" id="copy">
                  <g transform="translate(2, -1)">
                    <path fill="#ffffff" fillRule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z" />
                  </g>
                </symbol>
              </defs>
            </svg>
          </div>
          <div>
            <div className="wrapper my-0 mx-auto">
              <section>
                <div className="info my-[50px] mx-0">
                  <hgroup className="main mt-0 mr-0 mb-[20px] ml-0">
                    <h1 className="title m-0">PromptShield API<span><small><pre className="text-white m-0"> 1.0.0 </pre></small><small className="version-stamp"><pre className="text-white m-0">OAS 3.1</pre></small></span></h1>
                    <a className={"link [&]:bg-transparent"} href="/openapi.json" rel="noopener noreferrer" target="_blank">
                      <span className="url"> /openapi.json</span>
                    </a>
                  </hgroup>
                  <div className="description mt-0 mr-0 mb-[5px] ml-0">
                    <div className="renderedMarkdown">
                      <p>LLM Prompt Injection Defense Middleware — 4-layer protection with configurable aggression.</p>
                      <p><strong>Authentication:</strong> Protected endpoints require <code>X-API-Key</code> header.</p>
                      <p><strong>Rate Limiting:</strong> Returns <code>429</code> when limit is exceeded.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={"scheme-container bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-white [box-shadow:0_1px_2px_0_rgba(0,0,0,.15)] mt-0 mr-0 mb-[20px] ml-0"}>
              <section className={"schemes wrapper gap-[10px] [&]:justify-end my-0 mx-auto"}>
                <div className={"auth-wrapper [&]:justify-start"}>
                  <button className={"btn authorize unlocked bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent bg-transparent! text-[#49cc90] transition-all duration-300"}>
                    <span>Authorize</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                      <path fill="currentColor" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                    </svg>
                  </button>
                </div>
              </section>
            </div>
            <div />
            <main style={{ outline: "none" }} id="operations" tabIndex={-1}>
              <div className="wrapper my-0 mx-auto">
                <ImportedSection />
              </div>
              <div className="wrapper my-0 mx-auto">
                <section />
              </div>
              <div className="wrapper my-0 mx-auto">
                <ImportedSection2 />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

function ImportedSection() {
  return (
    <section>
      <div>
        <span>
          <div className="opblock-tag-section is-open">
            <h3 className={"opblock-tag no-desc text-[#3b4151] cursor-pointer mt-0 mr-0 mb-[5px] ml-0 transition-all duration-200 [&:hover]:bg-none [&:hover]:[background-position:0%_0%] [&:hover]:[background-size:auto_auto] [&:hover]:[background-repeat:repeat] [&:hover]:[background-origin:padding-box] [&:hover]:[background-clip:border-box] [&:hover]:[background-attachment:scroll] [&:hover]:bg-[#00000005]"} id="operations-tag-Public">
              <a className={"nostyle [&]:bg-transparent"} href="#/Public">
                <span>Public</span>
              </a>
              <small />
              <button className="expand-operation" aria-expanded="true" title="Collapse operation">
                <svg className="transition-all duration-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                  <path fill="currentColor" d="M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z" />
                </svg>
              </button>
            </h3>
            <div className="no-margin m-0">
              <div>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Public-root__get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Public/root__get">
                              <span>/</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Root</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Public-health_health_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Public/health_health_get">
                              <span>/health</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Health</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/health" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Public-dashboard_dashboard_html_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Public/dashboard_dashboard_html_get">
                              <span>/dashboard.html</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Dashboard</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/dashboard.html" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Public-docs_page_docs_html_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Public/docs_page_docs_html_get">
                              <span>/docs.html</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Docs Page</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/docs.html" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Public-index_index_html_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Public/index_index_html_get">
                              <span>/index.html</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Index</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/index.html" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Public-landing_landing_html_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Public/landing_landing_html_get">
                              <span>/landing.html</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Landing</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/landing.html" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <div className="opblock-tag-section is-open">
            <h3 className={"opblock-tag no-desc text-[#3b4151] cursor-pointer mt-0 mr-0 mb-[5px] ml-0 transition-all duration-200 [&:hover]:bg-none [&:hover]:[background-position:0%_0%] [&:hover]:[background-size:auto_auto] [&:hover]:[background-repeat:repeat] [&:hover]:[background-origin:padding-box] [&:hover]:[background-clip:border-box] [&:hover]:[background-attachment:scroll] [&:hover]:bg-[#00000005]"} id="operations-tag-Protected">
              <a className={"nostyle [&]:bg-transparent"} href="#/Protected">
                <span>Protected</span>
              </a>
              <small />
              <button className="expand-operation" aria-expanded="true" title="Collapse operation">
                <svg className="transition-all duration-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                  <path fill="currentColor" d="M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z" />
                </svg>
              </button>
            </h3>
            <div className="no-margin m-0">
              <div>
                <span>
                  <div className="opblock opblock-post bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#49cc901a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Protected-chat_chat_post">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">POST</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Protected/chat_chat_post">
                              <span>/chat</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Chat</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"authorization__btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black"} aria-label="authorization button unlocked">
                        <svg className="unlocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                        </svg>
                      </button>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="post ​/chat" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-post bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#49cc901a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Protected-analyze_analyze_post">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">POST</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Protected/analyze_analyze_post">
                              <span>/analyze</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Analyze</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"authorization__btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black"} aria-label="authorization button unlocked">
                        <svg className="unlocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                        </svg>
                      </button>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="post ​/analyze" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-post bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#49cc901a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Protected-set_aggression_aggression_post">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">POST</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Protected/set_aggression_aggression_post">
                              <span>/aggression</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Set Aggression</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"authorization__btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black"} aria-label="authorization button unlocked">
                        <svg className="unlocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                        </svg>
                      </button>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="post ​/aggression" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Protected-stats_stats_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Protected/stats_stats_get">
                              <span>/stats</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Stats</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"authorization__btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black"} aria-label="authorization button unlocked">
                        <svg className="unlocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                        </svg>
                      </button>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/stats" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <div className="opblock-tag-section is-open">
            <h3 className={"opblock-tag no-desc text-[#3b4151] cursor-pointer mt-0 mr-0 mb-[5px] ml-0 transition-all duration-200 [&:hover]:bg-none [&:hover]:[background-position:0%_0%] [&:hover]:[background-size:auto_auto] [&:hover]:[background-repeat:repeat] [&:hover]:[background-origin:padding-box] [&:hover]:[background-clip:border-box] [&:hover]:[background-attachment:scroll] [&:hover]:bg-[#00000005]"} id="operations-tag-Audit">
              <a className={"nostyle [&]:bg-transparent"} href="#/Audit">
                <span>Audit</span>
              </a>
              <small />
              <button className="expand-operation" aria-expanded="true" title="Collapse operation">
                <svg className="transition-all duration-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                  <path fill="currentColor" d="M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z" />
                </svg>
              </button>
            </h3>
            <div className="no-margin m-0">
              <div>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Audit-get_logs_logs_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Audit/get_logs_logs_get">
                              <span>/logs</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Get Logs</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"authorization__btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black"} aria-label="authorization button unlocked">
                        <svg className="unlocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                        </svg>
                      </button>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/logs" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
                <span>
                  <div className="opblock opblock-get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#61affe1a] [box-shadow:0_0_3px_rgba(0,0,0,.19)] mt-0 mr-0 mb-[15px] ml-0" id="operations-Audit-logs_summary_logs_summary_get">
                    <div className="opblock-summary cursor-pointer">
                      <button className="opblock-summary-control" aria-expanded="false">
                        <span className="opblock-summary-method text-white text-center [text-shadow:0_1px_0_rgba(0,0,0,.1)]">GET</span>
                        <div className="opblock-summary-path-description-wrapper gap-y-0 gap-x-[10px]">
                          <span className="opblock-summary-path">
                            <a className={"nostyle [&]:bg-transparent"} href="#/Audit/logs_summary_logs_summary_get">
                              <span>/logs<wbr />/summary</span>
                            </a>
                          </span>
                          <div className="opblock-summary-description text-[#3b4151] [word-break:break-word]">Logs Summary</div>
                        </div>
                      </button>
                      <div className={"view-line-link copy-to-clipboard bottom-[10px] cursor-pointer [&]:justify-center [&]:static right-[100px] top-[2px] transition-all duration-500"} title="Copy path to clipboard" aria-label="Copy path to clipboard">
                        <button aria-label="Copy path to clipboard" title="Copy path to clipboard" type="button" />
                      </div>
                      <button className={"authorization__btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black"} aria-label="authorization button unlocked">
                        <svg className="unlocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z" />
                        </svg>
                      </button>
                      <button className={"opblock-control-arrow bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [&]:bg-transparent text-black text-center"} aria-label="get ​/logs​/summary" aria-expanded="false" tabIndex={-1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
                          <path fill="currentColor" d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
}

function ImportedSection2() {
  return (
    <section>
      <section className="models is-open my-[30px] mx-0">
        <h4>
          <button className="models-control" aria-expanded="true">
            <span>Schemas</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" {...({ focusable: "false" } as any)}>
              <path fill="currentColor" d="M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z" />
            </svg>
          </button>
        </h4>
        <div className="no-margin m-0">
          <article className={"json-schema-2020-12 bg-[#0000000d] m-[20px] [&]:overflow-x-auto"}>
            <div className="json-schema-2020-12-head">
              <button className="json-schema-2020-12-accordion" type="button">
                <div className="json-schema-2020-12-accordion__children">
                  <strong className="json-schema-2020-12__title">AggressionRequest</strong>
                </div>
                <span className="json-schema-2020-12-accordion__icon json-schema-2020-12-accordion__icon--collapsed transition-transform duration-150 ease-in align-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
              <button className="json-schema-2020-12-expand-deep-button text-[#afaeae]" type="button">Expand all</button>
              <strong className="json-schema-2020-12__attribute json-schema-2020-12__attribute--primary text-[#5555aa] lowercase">object</strong>
            </div>
            <div className="json-schema-2020-12-body json-schema-2020-12-body--collapsed my-[2px] mx-0" />
          </article>
          <article className={"json-schema-2020-12 bg-[#0000000d] mt-0 mr-[20px] mb-[15px] ml-[20px] [&]:overflow-x-auto"}>
            <div className="json-schema-2020-12-head">
              <button className="json-schema-2020-12-accordion" type="button">
                <div className="json-schema-2020-12-accordion__children">
                  <strong className="json-schema-2020-12__title">AnalyzeRequest</strong>
                </div>
                <span className="json-schema-2020-12-accordion__icon json-schema-2020-12-accordion__icon--collapsed transition-transform duration-150 ease-in align-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
              <button className="json-schema-2020-12-expand-deep-button text-[#afaeae]" type="button">Expand all</button>
              <strong className="json-schema-2020-12__attribute json-schema-2020-12__attribute--primary text-[#5555aa] lowercase">object</strong>
            </div>
            <div className="json-schema-2020-12-body json-schema-2020-12-body--collapsed my-[2px] mx-0" />
          </article>
          <article className={"json-schema-2020-12 bg-[#0000000d] mt-0 mr-[20px] mb-[15px] ml-[20px] [&]:overflow-x-auto"}>
            <div className="json-schema-2020-12-head">
              <button className="json-schema-2020-12-accordion" type="button">
                <div className="json-schema-2020-12-accordion__children">
                  <strong className="json-schema-2020-12__title">AnalyzeResponse</strong>
                </div>
                <span className="json-schema-2020-12-accordion__icon json-schema-2020-12-accordion__icon--collapsed transition-transform duration-150 ease-in align-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
              <button className="json-schema-2020-12-expand-deep-button text-[#afaeae]" type="button">Expand all</button>
              <strong className="json-schema-2020-12__attribute json-schema-2020-12__attribute--primary text-[#5555aa] lowercase">object</strong>
            </div>
            <div className="json-schema-2020-12-body json-schema-2020-12-body--collapsed my-[2px] mx-0" />
          </article>
          <article className={"json-schema-2020-12 bg-[#0000000d] mt-0 mr-[20px] mb-[15px] ml-[20px] [&]:overflow-x-auto"}>
            <div className="json-schema-2020-12-head">
              <button className="json-schema-2020-12-accordion" type="button">
                <div className="json-schema-2020-12-accordion__children">
                  <strong className="json-schema-2020-12__title">ChatRequest</strong>
                </div>
                <span className="json-schema-2020-12-accordion__icon json-schema-2020-12-accordion__icon--collapsed transition-transform duration-150 ease-in align-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
              <button className="json-schema-2020-12-expand-deep-button text-[#afaeae]" type="button">Expand all</button>
              <strong className="json-schema-2020-12__attribute json-schema-2020-12__attribute--primary text-[#5555aa] lowercase">object</strong>
            </div>
            <div className="json-schema-2020-12-body json-schema-2020-12-body--collapsed my-[2px] mx-0" />
          </article>
          <article className={"json-schema-2020-12 bg-[#0000000d] mt-0 mr-[20px] mb-[15px] ml-[20px] [&]:overflow-x-auto"}>
            <div className="json-schema-2020-12-head">
              <button className="json-schema-2020-12-accordion" type="button">
                <div className="json-schema-2020-12-accordion__children">
                  <strong className="json-schema-2020-12__title">ChatResponse</strong>
                </div>
                <span className="json-schema-2020-12-accordion__icon json-schema-2020-12-accordion__icon--collapsed transition-transform duration-150 ease-in align-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
              <button className="json-schema-2020-12-expand-deep-button text-[#afaeae]" type="button">Expand all</button>
              <strong className="json-schema-2020-12__attribute json-schema-2020-12__attribute--primary text-[#5555aa] lowercase">object</strong>
            </div>
            <div className="json-schema-2020-12-body json-schema-2020-12-body--collapsed my-[2px] mx-0" />
          </article>
          <article className={"json-schema-2020-12 bg-[#0000000d] mt-0 mr-[20px] mb-[15px] ml-[20px] [&]:overflow-x-auto"}>
            <div className="json-schema-2020-12-head">
              <button className="json-schema-2020-12-accordion" type="button">
                <div className="json-schema-2020-12-accordion__children">
                  <strong className="json-schema-2020-12__title">HTTPValidationError</strong>
                </div>
                <span className="json-schema-2020-12-accordion__icon json-schema-2020-12-accordion__icon--collapsed transition-transform duration-150 ease-in align-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
              <button className="json-schema-2020-12-expand-deep-button text-[#afaeae]" type="button">Expand all</button>
              <strong className="json-schema-2020-12__attribute json-schema-2020-12__attribute--primary text-[#5555aa] lowercase">object</strong>
            </div>
            <div className="json-schema-2020-12-body json-schema-2020-12-body--collapsed my-[2px] mx-0" />
          </article>
          <article className={"json-schema-2020-12 bg-[#0000000d] my-0 mx-[20px] [&]:overflow-x-auto"}>
            <div className="json-schema-2020-12-head">
              <button className="json-schema-2020-12-accordion" type="button">
                <div className="json-schema-2020-12-accordion__children">
                  <strong className="json-schema-2020-12__title">ValidationError</strong>
                </div>
                <span className="json-schema-2020-12-accordion__icon json-schema-2020-12-accordion__icon--collapsed transition-transform duration-150 ease-in align-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
              <button className="json-schema-2020-12-expand-deep-button text-[#afaeae]" type="button">Expand all</button>
              <strong className="json-schema-2020-12__attribute json-schema-2020-12__attribute--primary text-[#5555aa] lowercase">object</strong>
            </div>
            <div className="json-schema-2020-12-body json-schema-2020-12-body--collapsed my-[2px] mx-0" />
          </article>
        </div>
      </section>
    </section>
  );
}
