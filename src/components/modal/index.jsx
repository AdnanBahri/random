import React, { useState } from "react";
import ReactDOM from "react-dom";
import useClient from "../../hooks/useClient";

const ClientModal = ({ visible, closeModal }) => {
  const [clientName, setClientName] = useState("");
  const [clientTelephone, setClientTelephone] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  const createClientMutation = useClient();

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClientMutation.mutateAsync({
        name: clientName,
        telephone: clientTelephone,
        address: clientAddress,
      });
      // Reset form inputs
      setClientName("");
      setClientTelephone("");
      setClientAddress("");
      closeModal();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const modalRoot = document.getElementById("portals");

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform ${
        visible
          ? "translate-x-(-50%) translate-y-(-50%)"
          : "translate-x-(-50%) translate-y-(-150%)"
      } flex flex-col items-center z-50 justify-center ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        visible ? "visible" : "invisible"
      } w-full max-w-50rem shadow-xl rounded-lg bg-gray-100 transition-all duration-100`}
    >
      {visible &&
        ReactDOM.createPortal(
          <div className="fixed ">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <form onSubmit={handleClientSubmit}>
                <label>Name:</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
                <label>Telephone:</label>
                <input
                  type="tel"
                  value={clientTelephone}
                  onChange={(e) => setClientTelephone(e.target.value)}
                  required
                />
                <label>Address:</label>
                <input
                  type="text"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  required
                />
                <button type="submit" disabled={createClientMutation.isLoading}>
                  {createClientMutation.isLoading
                    ? "Creating..."
                    : "Create Client"}
                </button>
              </form>
            </div>
          </div>,
          document.getElementById("portal-root")
        )}
    </div>
  );
};

export default ClientModal;
