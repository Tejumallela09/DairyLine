//npm install react-datepicker
//npm install react-date-range
//npm install react-day-picker


import React, { useState } from "react";
import { Row, Col, ListGroup, Form, Button, Modal } from "react-bootstrap";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles for the date range picker
import "react-date-range/dist/theme/default.css"; // Import the default theme for the date range picker

const CartItemComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [selectedSubscription, setSelectedSubscription] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSubscribeClick = () => {
    setShowModal(true);
    setSelectedDays(selectedSubscription === "daily" ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] : []);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubscriptionSelect = (subscription) => {
    setSelectedSubscription(subscription);
    setShowModal(false);
    setShowCalendar(subscription === "monthly" || subscription === "weekly" || subscription === "daily");
  };

  const handleSelect = (ranges) => {
    setSelectedRange(ranges.selection);
  };

  const handleDaySelect = (day) => {
    const selectedDay = day.target.value;
    const updatedSelectedDays = [...selectedDays];

    if (updatedSelectedDays.includes(selectedDay)) {
      // If the day is already selected, remove it
      const index = updatedSelectedDays.indexOf(selectedDay);
      updatedSelectedDays.splice(index, 1);
    } else {
      // If the day is not selected, add it
      updatedSelectedDays.push(selectedDay);
    }

    setSelectedDays(updatedSelectedDays);
  };

  const handleSubmit = () => {
    setShowCalendar(false);
    const startDate = selectedRange.startDate.toLocaleDateString();
    const endDate = selectedRange.endDate.toLocaleDateString();
    const selectedDateRange = `${startDate} - ${endDate}`;
  
    if (selectedSubscription === "monthly") {
      alert(`Your milk will be delivered in this Date Range: ${selectedDateRange}`);
      setSelectedSubscription("monthly");
    } else if (selectedSubscription === "weekly") {
      alert(`Your milk will be delivered on these Selected Days in every week: ${selectedDays.join(", ")}`);
      setSelectedSubscription("weekly");
    }
    else if(selectedSubscription=== "daily"){
      alert(`Your milk will be delivered daily`);
      setSelectedSubscription("daily");
    }
  };
  

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            Logotech series <br />
            Gaming mouse
          </Col>
          <Col md={2}>
            <b>$89</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="bi bi-trash"></i>
            </Button>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <Button variant="primary" size="sm" className="me-2">
                Buy Once
              </Button>
              <Button variant="success" size="sm" onClick={handleSubscribeClick}>
  {selectedSubscription === "weekly" ? "Weekly" : selectedSubscription === "monthly" ? "Monthly" : selectedSubscription === "daily" ? "Daily" : "Subscribe"}
</Button>




            </div>
          </Col>
        </Row>
      </ListGroup.Item>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => handleSubscriptionSelect("daily")}
          >
            Daily
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => handleSubscriptionSelect("weekly")}
          >
            Weekly
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => handleSubscriptionSelect("monthly")}
          >
            Monthly
          </Button>
        </Modal.Body>
      </Modal>

      {showCalendar && selectedSubscription === "monthly" && (
  <div className="mt-1">
    <DateRangePicker ranges={[selectedRange]} onChange={handleSelect} />
    <Button variant="primary" className="mt-3" onClick={handleSubmit}>
      Submit
    </Button>
  </div>
)}
{showCalendar && selectedSubscription === "daily" && (
  <div className="mt-1">
    <Form.Group>
      <Form.Check
        inline
        label="Monday"
        value="Monday"
        type="checkbox"
        checked={true}
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Tuesday"
        value="Tuesday"
        type="checkbox"
        checked={true}
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Wednesday"
        value="Wednesday"
        type="checkbox"
        checked={true}
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Thursday"
        value="Thursday"
        type="checkbox"
        checked={true}
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Friday"
        value="Friday"
        type="checkbox"
        checked={true}
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Saturday"
        value="Saturday"
        type="checkbox"
        checked={true}
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Sunday"
        value="Sunday"
        type="checkbox"
        checked={true}
        onChange={handleDaySelect}
      />
    </Form.Group>
    <Button variant="primary" className="mt-3" onClick={handleSubmit}>
      Submit
    </Button>
  </div>
)}

{showCalendar && selectedSubscription === "weekly" && (
  <div className="mt-1">
    <Form.Group>
      <Form.Check
        inline
        label="Monday"
        value="Monday"
        type="checkbox"
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Tuesday"
        value="Tuesday"
        type="checkbox"
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Wednesday"
        value="Wednesday"
        type="checkbox"
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Thursday"
        value="Thursday"
        type="checkbox"
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Friday"
        value="Friday"
        type="checkbox"
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Saturday"
        value="Saturday"
        type="checkbox"
        onChange={handleDaySelect}
      />
      <Form.Check
        inline
        label="Sunday"
        value="Sunday"
        type="checkbox"
        onChange={handleDaySelect}
      />
    </Form.Group>
    <Button variant="primary" className="mt-3" onClick={handleSubmit}>
      Submit
    </Button>
  </div>
)}

    </>
  );
};

export default CartItemComponent;