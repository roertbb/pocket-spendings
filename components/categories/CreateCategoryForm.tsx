import { FormField } from "@ui";
import { Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const CreateCategoryFormSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

type CreateCategoryFormSchemaType = z.infer<typeof CreateCategoryFormSchema>;

export function CreateCategoryForm() {
  return (
    <div className="p-4">
      <Formik
        initialValues={{} as CreateCategoryFormSchemaType}
        validationSchema={toFormikValidationSchema(CreateCategoryFormSchema)}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({}) => (
          <Form>
            <FormField name="name" className="mb-4" />
            <FormField name="description" className="mb-4" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
