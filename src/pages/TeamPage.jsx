import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import TeamMemberCard from "../components/TeamMemberCard.jsx";
import ExpandedMemberPanel from "../components/ExpandedMemberPanel.jsx";
import { allMembers } from "../data/members.js";
import ScrollButtons from "../components/ScrollButtons";
import "./TeamPage.css";

function TeamPage() {
  const [filter, setFilter] = useState("member");
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const selectedMemberRef = useRef(null);

  useEffect(() => {
    setSelectedMemberId(null);
  }, [filter]);

  // Replace your existing scrolling useEffect with this one
  useEffect(() => {
    // Check if a member is selected
    if (selectedMemberId) {
      // Use a brief timeout to ensure the element has rendered before scrolling
      const timer = setTimeout(() => {
        if (selectedMemberRef.current) {
          selectedMemberRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 10000); // A 0ms timeout is enough to push this to the next browser "tick"

      // It's good practice to clean up the timeout
      return () => clearTimeout(timer);
    }
  }, [selectedMemberId]);

  const handleMemberSelect = (memberId) => {
    setSelectedMemberId((prevId) => (prevId === memberId ? null : memberId));
  };

  const selectedMember = allMembers.find((m) => m.id === selectedMemberId);

  const filteredMembers = allMembers.filter(
    (member) => member.status === filter
  );
  const gridMembers = selectedMember
    ? filteredMembers.filter((m) => m.id !== selectedMemberId)
    : filteredMembers;

  return (
    <div>
      <Navbar />
      <main className="team-content">
        <h1>Meet the Team</h1>

        {/* The restored button section */}
        <div className="filter-buttons">
          <button
            onClick={() => setFilter("member")}
            className={filter === "member" ? "active" : ""}
          >
            Current Members
          </button>
          <button
            onClick={() => setFilter("alumni")}
            className={filter === "alumni" ? "active" : ""}
          >
            Alumni
          </button>
          <button
            onClick={() => setFilter("collaborator")}
            className={filter === "collaborator" ? "active" : ""}
          >
            Collaborators
          </button>
        </div>

        {selectedMember && (
          <div className="selected-member-container">
            <TeamMemberCard
              member={selectedMember}
              onSelect={handleMemberSelect}
              isSelected={true}
            />
            <ExpandedMemberPanel member={selectedMember} />
          </div>
        )}

        <div className="team-grid">
          {gridMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onSelect={handleMemberSelect}
              isSelected={false}
            />
          ))}
        </div>
      </main>
      <Footer />
      <ScrollButtons />
    </div>
  );
}

export default TeamPage;
