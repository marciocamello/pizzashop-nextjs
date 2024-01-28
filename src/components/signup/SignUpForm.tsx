'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string().min(3),
  managerName: z.string().min(3),
  phone: z.string().min(3),
  email: z.string().email(),
})

type SignUpFormType = z.infer<typeof signUpForm>

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>()
  const { push } = useRouter()

  async function handleSignIn(data: SignUpFormType) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)

      toast.success(
        'Welcome to Pizza Shop! Establisment created with success.',
        {
          action: {
            label: 'Sign In',
            onClick: () => push('/signin'),
          },
        },
      )
      reset()
    } catch (error) {
      toast.error('Error creating account, please try again.')
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
      <div className="space-y-2">
        <Label htmlFor="restaurantName">Establishment Name</Label>
        <Input
          id="restaurantName"
          type="text"
          className="input"
          placeholder="Please enter your establishment name"
          required
          {...register('restaurantName')}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="managerName">Manager Name</Label>
        <Input
          id="managerName"
          type="text"
          className="input"
          placeholder="Please enter your manager name"
          required
          {...register('managerName')}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="text"
          className="input"
          placeholder="Please enter your phone"
          required
          {...register('phone')}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Access Panel
      </Button>

      <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
        When continuing, you agree to our{' '}
        <a href="" className="underline underline-offset-4">
          {' '}
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="" className="underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
