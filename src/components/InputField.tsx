import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

type InputFieldProps = FieldHookConfig<string> & {
    label: string;
};

export const InputField: React.FC<InputFieldProps> = ({
    label,
    ...props
}) => {
    const [field, {error}] = useField(props);

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <Input {...field} type={props.type} id={field.name} placeholder={props.placeholder} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}