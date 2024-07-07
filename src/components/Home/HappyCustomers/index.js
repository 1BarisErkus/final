"use client";
import { H2, Section, StyledIcon } from "./styles";
import CommentCard from "../../CommentCard";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const HappyCustomers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const data = [
      {
        rating: 5,
        name: "John Doe",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
        id: 1,
      },
      {
        rating: 3,
        name: "John Doe",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
        id: 1,
      },
      {
        rating: 4.5,
        name: "John Doe",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
        id: 1,
      },
      {
        rating: 1.5,
        name: "John Doe",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
        id: 1,
      },
      {
        rating: 5,
        name: "John Doe",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
        id: 1,
      },
      {
        rating: 5,
        name: "John Doe",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
        id: 1,
      },
    ];
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section className="container pt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <H2 className="fw-bold integralFont">Our Happy Customers</H2>
        <div className="d-flex gap-3">
          <button className="border-0 bg-white" onClick={handlePrev}>
            <StyledIcon>
              <FiArrowLeft size={24} />
            </StyledIcon>
          </button>
          <button className="border-0 bg-white" onClick={handleNext}>
            <StyledIcon>
              <FiArrowRight size={24} />
            </StyledIcon>
          </button>
        </div>
      </div>
      <div className="position-relative overflow-hidden">
        <div
          className="d-flex transition-transform gap-3"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / (customers.length - 2)
            }%)`,
            transition: "transform 0.5s",
          }}
        >
          {customers.map((customer) => (
            <CommentCard key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HappyCustomers;
