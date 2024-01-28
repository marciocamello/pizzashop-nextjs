'use client'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInFormType = z.infer<typeof signInForm>

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SignInFormType>()

  async function handleSignIn(data: SignInFormType) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)

      toast.success('We sent you an email with a link to access the panel.', {
        action: {
          label: 'Resend email',
          onClick: () => handleSignIn(data),
        },
      })
      reset()
    } catch (error) {
      toast.error('Error sending email, please try again.')
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          className="input"
          placeholder="Please enter your email"
          required
          {...register('email')}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Access Panel
      </Button>
    </form>
  )
}
