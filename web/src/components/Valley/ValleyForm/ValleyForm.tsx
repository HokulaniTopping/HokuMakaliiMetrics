import type {
  EditValleyByUniqueSampleNumber,
  UpdateValleyInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormValley = NonNullable<EditValleyByUniqueSampleNumber['valley']>

interface ValleyFormProps {
  valley?: EditValleyByUniqueSampleNumber['valley']
  onSave: (
    data: UpdateValleyInput,
    unique_sample_number?: FormValley['unique_sample_number']
  ) => void
  error: RWGqlError
  loading: boolean
}

const ValleyForm = (props: ValleyFormProps) => {
  const onSubmit = (data: FormValley) => {
    props.onSave(data, props?.valley?.unique_sample_number)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormValley> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="sample_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sample id
        </Label>

        <TextField
          name="sample_id"
          defaultValue={props.valley?.sample_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="sample_id" className="rw-field-error" />

        <Label
          name="TEC"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tec
        </Label>

        <TextField
          name="TEC"
          defaultValue={props.valley?.TEC}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="TEC" className="rw-field-error" />

        <Label
          name="pH"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          P h
        </Label>

        <TextField
          name="pH"
          defaultValue={props.valley?.pH}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="pH" className="rw-field-error" />

        <Label
          name="EC"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ec
        </Label>

        <TextField
          name="EC"
          defaultValue={props.valley?.EC}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="EC" className="rw-field-error" />

        <Label
          name="Sulfur"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sulfur
        </Label>

        <TextField
          name="Sulfur"
          defaultValue={props.valley?.Sulfur}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Sulfur" className="rw-field-error" />

        <Label
          name="Phosphorus"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phosphorus
        </Label>

        <TextField
          name="Phosphorus"
          defaultValue={props.valley?.Phosphorus}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Phosphorus" className="rw-field-error" />

        <Label
          name="Olsen_P"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Olsen p
        </Label>

        <TextField
          name="Olsen_P"
          defaultValue={props.valley?.Olsen_P}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Olsen_P" className="rw-field-error" />

        <Label
          name="Calcium"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Calcium
        </Label>

        <TextField
          name="Calcium"
          defaultValue={props.valley?.Calcium}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Calcium" className="rw-field-error" />

        <Label
          name="Magnesium"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Magnesium
        </Label>

        <TextField
          name="Magnesium"
          defaultValue={props.valley?.Magnesium}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Magnesium" className="rw-field-error" />

        <Label
          name="Potassium"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Potassium
        </Label>

        <TextField
          name="Potassium"
          defaultValue={props.valley?.Potassium}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Potassium" className="rw-field-error" />

        <Label
          name="Sodium"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sodium
        </Label>

        <TextField
          name="Sodium"
          defaultValue={props.valley?.Sodium}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Sodium" className="rw-field-error" />

        <Label
          name="Boron"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Boron
        </Label>

        <TextField
          name="Boron"
          defaultValue={props.valley?.Boron}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Boron" className="rw-field-error" />

        <Label
          name="Iron"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Iron
        </Label>

        <TextField
          name="Iron"
          defaultValue={props.valley?.Iron}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Iron" className="rw-field-error" />

        <Label
          name="Manganese"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Manganese
        </Label>

        <TextField
          name="Manganese"
          defaultValue={props.valley?.Manganese}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Manganese" className="rw-field-error" />

        <Label
          name="Copper"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Copper
        </Label>

        <TextField
          name="Copper"
          defaultValue={props.valley?.Copper}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Copper" className="rw-field-error" />

        <Label
          name="Zinc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Zinc
        </Label>

        <TextField
          name="Zinc"
          defaultValue={props.valley?.Zinc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Zinc" className="rw-field-error" />

        <Label
          name="Aluminum"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Aluminum
        </Label>

        <TextField
          name="Aluminum"
          defaultValue={props.valley?.Aluminum}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Aluminum" className="rw-field-error" />

        <Label
          name="Total_Carbon__"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total carbon
        </Label>

        <TextField
          name="Total_Carbon__"
          defaultValue={props.valley?.Total_Carbon__}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Total_Carbon__" className="rw-field-error" />

        <Label
          name="Total_Nitrogen__"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total nitrogen
        </Label>

        <TextField
          name="Total_Nitrogen__"
          defaultValue={props.valley?.Total_Nitrogen__}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Total_Nitrogen__" className="rw-field-error" />

        <Label
          name="C_N_Ratio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          C n ratio
        </Label>

        <TextField
          name="C_N_Ratio"
          defaultValue={props.valley?.C_N_Ratio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="C_N_Ratio" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ValleyForm
