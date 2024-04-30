



export function EditButton() {
  


  return (
    <div className='edit'>
      <button className="edit-button" >
        Edit Name
      </button>
      
        <div className='inputName'>
          <div className='inputContainer'>
            <label htmlFor="userName">User name:</label>
            <input
              type="text"
              id="userName"
              // value={userNameValue} // Utiliser l'état de userNameValue
              // onChange={(e) => setUserNameValue(e.target.value)} // Mettre à jour l'état de userNameValue
            />

          </div>
          <div className='inputContainer'>
            <label htmlFor="firstName">First name:</label>
            <input className='readOnly'
              type="text"
              id="firstName"
              // value={userFirstName}
              // onChange={(e) => setUserFirstName(e.target.value)}
              // readOnly
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="lastName">Last name:</label>
            <input className='readOnly'
              type="text"
              id="lastName"
              // value={userLastName}
              // onChange={(e) => setUserLastName(e.target.value)}
              // readOnly
            />
          </div>
          <div className='inputButton'>
            {/* <button onClick={handleToggleEditForm}>Save</button>
            <button onClick={handleCancel}>Cancel</button> */}
          </div>
        </div>
      
    </div>
  );
}
