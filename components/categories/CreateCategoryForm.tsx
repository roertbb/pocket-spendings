import { Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button, FormInput } from "@ui";
import { FormSelect } from "components/ui/Form/FormSelect";
import { CategoryColor, CategoryIcon } from "types/Category";
import { CreateCategoryFormSchema } from "./schema";

const colors = [
  { value: CategoryColor.Green, label: "Green" },
  { value: CategoryColor.Red, label: "Red" },
  { value: CategoryColor.Blue, label: "Blue" },
  { value: CategoryColor.Purple, label: "Purple" },
  { value: CategoryColor.Orange, label: "Orange" },
] as const;

const icons = [
  { value: CategoryIcon.Bill, label: "Bills" },
  { value: CategoryIcon.Food, label: "Food" },
  { value: CategoryIcon.Home, label: "Home" },
  { value: CategoryIcon.Medicine, label: "Medicine" },
  { value: CategoryIcon.Transport, label: "Transport" },
] as const;

export function CreateCategoryForm() {
  return (
    <div className="p-4">
      <Formik
        initialValues={{
          name: "",
          description: "",
          color: "",
          icon: "",
        }}
        validationSchema={toFormikValidationSchema(CreateCategoryFormSchema)}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({}) => (
          <Form>
            <FormInput name="name" className="mb-4" />
            <FormInput name="description" className="mb-4" />
            <FormSelect
              name="color"
              className="mb-4"
              placeholder="Select value"
            >
              <option value="">Select value</option>
              {colors.map(({ value, label }) => (
                <option value={value} key={value} className="capitalize">
                  {label}
                </option>
              ))}
            </FormSelect>
            <FormSelect name="icon" className="mb-4" placeholder="Select value">
              <option value="">Select value</option>
              {icons.map(({ value, label }) => (
                <option value={value} key={value} className="capitalize">
                  {label}
                </option>
              ))}
            </FormSelect>
            <Button>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
