import React, { useState } from 'react'

const CheckBoxInput = ({ label }) => {
  const [checked, setChecked] = useState(true)

  const onChange = (e) => setChecked(!checked)

  return (
    <label>
      <span>{label}</span>
      <div className="switch">
        <input
          type="checkbox"
          name="notifications"
          id="notifications-checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="slider round"></span>
      </div>
    </label>
  )
}

export default CheckBoxInput
