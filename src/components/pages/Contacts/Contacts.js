import React, { useState } from "react";

import Button from "../../Button/Button";
import imgContact from "../../../userImage/contact.jpg";
import Popup from "./PopupModal";

import styles from "./Contact.module.scss";
import classNames from "classnames/bind";

import { MdLocationOn, MdPhone } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const cx = classNames.bind(styles);

const Contacts = () => {
  const [toggle, setToggle] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({});

  const handleValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    function isEmail(email) {
      var regax =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regax.test(email);
    }

    if (contact.name === "") {
      errorSubmit.name = "Please do not leave it blank";
      flag = false;
    }
    if (contact.email === "") {
      errorSubmit.email = "Please do not leave it blank";
      flag = false;
    } else {
      if (!isEmail(contact.email)) {
        errorSubmit.email = "Please enter correct email format";
        flag = false;
      }
    }
    if (contact.phone === "") {
      errorSubmit.phone = "Please do not leave it blank";
      flag = false;
    }
    if (contact.message === "") {
      errorSubmit.message = "Would you like to write something for us?";
      flag = false;
    }

    if (!flag) {
      setError(errorSubmit);
    } else {
      localStorage.setItem("contact", JSON.stringify(contact));
      const timer = setTimeout(() => {
        setToggle(true);
      }, 500);
      return () => clearTimeout(timer);
    }

    console.log({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      message: contact.message,
    });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bg_top")}>
        <h1>Contact Us</h1>
        <div className={cx("grid", "wide")}>
          <div className={cx("row", "sm-gutter")}>
            <div className={cx("col", "l-3")}>
              <div className={cx("info")}>
                <div className={cx("info_icon")}>
                  <MdLocationOn className={cx("icon")} />
                </div>
                <div className={cx("info_text")}>
                  Address:<span>516 Au Co Street, Da Nang city</span>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-3")}>
              <div className={cx("info")}>
                <div className={cx("info_icon")}>
                  <MdPhone className={cx("icon")} />
                </div>
                <div className={cx("info_text")}>
                  Phone:<span>+84336017781</span>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-3")}>
              <div className={cx("info")}>
                <div className={cx("info_icon")}>
                  <IoIosSend className={cx("icon")} />
                </div>
                <div className={cx("info_text")}>
                  Email:<span>pvd261202@gmail.com</span>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-3")}>
              <div className={cx("info")}>
                <div className={cx("info_icon")}>
                  <FaGithub className={cx("icon")} />
                </div>
                <div className={cx("info_text")}>
                  Github:<span>https://github.com/duc26-12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Popup Trigger={toggle} toggle={setToggle} />
      </div>
      <div className={cx("contact")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("contact_form")}>
            <form>
              <h3>Contact</h3>
              <div className={cx("form_group")}>
                <label>full name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={contact.name}
                  onChange={handleValue}
                ></input>
              </div>
              <div className={cx("msg_error")}>
                {error.name ? error.name : null}
              </div>

              <div className={cx("form_group")}>
                <label>email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={contact.email}
                  onChange={handleValue}
                ></input>
              </div>
              <div className={cx("msg_error")}>
                {error.email ? error.email : null}
              </div>
              <div className={cx("form_group")}>
                <label>phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={contact.phone}
                  onChange={handleValue}
                ></input>
              </div>
              <div className={cx("msg_error")}>
                {error.phone ? error.phone : null}
              </div>
              <div className={cx("form_group")}>
                <label>message</label>
                <textarea
                  type="text"
                  placeholder="Message"
                  name="message"
                  value={contact.message}
                  onChange={handleValue}
                ></textarea>
              </div>
              <div className={cx("msg_error")}>
                {error.message ? error.message : null}
              </div>

              <Button onClick={handleSubmit}>
                <span className={cx("button_title")}>Send Message</span>
              </Button>
            </form>
            <div className={cx("contact_image")}>
              <img src={imgContact} alt="" className={cx("image")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
