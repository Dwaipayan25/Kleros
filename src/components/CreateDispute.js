const CreateDispute = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };
  
    return (
      <div>
        <h2>Create Dispute</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Redirecting to{" "}
            <a href="https://court.kleros.io/" target="_blank" rel="noreferrer">
              https://court.kleros.io/
            </a>{" "}
            ...
          </label>
        </form>
      </div>
    );
  };

  export default CreateDispute;