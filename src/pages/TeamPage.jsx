import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import TeamMemberCard from "../components/TeamMemberCard.jsx";
import ExpandedMemberPanel from "../components/ExpandedMemberPanel.jsx";
import { allMembers } from "../data/members.js";
import "./TeamPage.css";

function TeamPage() {
  const [filter, setFilter] = useState("member");
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const selectedMemberRef = useRef(null);

  useEffect(() => {
    setSelectedMemberId(null);
  }, [filter]);

  // 3. Add this effect to handle scrolling
  useEffect(() => {
    // If a member is selected and the ref is attached to the element
    if (selectedMemberId && selectedMemberRef.current) {
      selectedMemberRef.current.scrollIntoView({
        behavior: "smooth", // Makes the scroll animated
        block: "start", // Aligns the top of the element to the top of the viewport
      });
    }
  }, [selectedMemberId]); // Run this effect every time the selected ID changes

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
    </div>
  );
}

export default TeamPage;
