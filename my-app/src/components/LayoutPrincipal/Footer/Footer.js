import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div>
    <footer>
      <div className="footerContainer">
        <div className="footerGrid">
          <div class="container">
            <div class="row">
              <div class="col-sm-2">.</div>
              <div class="col-sm-8">Components</div>
              <div class="col-sm-2">.</div>
            </div>
            <div class="row">
              <div class="col-sm-2">.</div>
              <div class="col-sm-8">
                <button type="button" class="btn btn-outline-primary" id="buttonFooter">
                  <a>Accordion</a>
                </button>
                <button type="button" class="btn btn-outline-primary" id="buttonFooter">
                  <a>Loading</a>
                </button>
                <button type="button" class="btn btn-outline-primary" id="buttonFooter">
                  <a>Button</a>
                </button>
              </div>
              <div class="col-sm-2">.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
