import type { CreateContactUsInput } from '@/types';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useContact } from '@/framework/user';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';

const contactFormSchema = yup.object().shape({
  name: yup.string().required('error-name-required'),
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  subject: yup.string().required('error-subject-required'),
  description: yup.string().required('error-description-required'),
});
const ContactFormWebapi = () => {
  const { t } = useTranslation('common');
  const { mutate, isLoading } = useContact();

  function onSubmit(values: CreateContactUsInput) {
    mutate(values);
  }

  return (
    <Form<CreateContactUsInput>
      onSubmit={onSubmit}
      validationSchema={contactFormSchema}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 ">
            <Input   
              {...register('name')}
              className="bg-indigo-600 text-white"
              variant="outline"
              placeholder='Name'
              error={t(errors.name?.message!)}
            />
            <Input
              
              {...register('email')}
              type="email"
              placeholder='Email'
              variant="outline"
              className="bg-indigo-600 text-white placeholder-white" 
              error={t(errors.email?.message!)}
            />
          </div>
          {/* <Input
            label={t('text-subject')}
            {...register('subject')}
            variant="outline"
            className="my-6"
            error={t(errors.subject?.message!)}
          /> */}
          <TextArea
          
            {...register('description')}
            variant="outline"
            placeholder='Message'
            className="bg-indigo-600  my-6"
            error={t(errors.description?.message!)}
          />
          <div className="flex justify-end">
          <Button loading={isLoading} disabled={isLoading}
          className='rounded bg-teal-400 px-4 py-2 text-indigo-950 shadow-sm shadow-teal-400 hover:bg-teal-500 hover:text-white '
          // variant='outline'
          >
            {t('text-submit')}
          </Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default ContactFormWebapi;
