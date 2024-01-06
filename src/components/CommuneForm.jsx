import { useState } from "react";
import { Button } from "./Button";
import { Dropdown, TextIinput } from "./Input";

export const CommuneForm = ({ onSave, districts }) => {
  const [form, setForm] = useState({ latin: "", khmer: "", district_id: "" });

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const onClickSave = () => {
    onSave(form);
    setForm({ latin: "", khmer: "" });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col pb-10">
        <h1 className=" text-neutral-600 text-center text-3xl font-bold">
          Commune Form
        </h1>
        <div className="py-2 flex items-center justify-center">
          <div className="flex-row">
            <TextIinput
              onChange={handleFormChange}
              label="Latin"
              name="latin"
              value={form.latin}
            />
            <TextIinput
              onChange={handleFormChange}
              label="Khmer"
              name="khmer"
              value={form.khmer}
            />
            <Dropdown
              label="Districts"
              data={districts}
              name="district_id"
              onChange={handleFormChange}
              placeHolder="Choose a districts"
            />
          </div>
          <div className="mt-4 ml-3">
            <Button className="mr-2" onClick={onClickSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};