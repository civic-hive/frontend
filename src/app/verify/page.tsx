"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'

export default function VerifyPage() {
  const [isVerified, setIsVerified] = useState(false)
  const { isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      router.replace('/')
    }
  }, [isConnected, router])

  const handleVerificationSuccess = () => {
    setIsVerified(true)
    router.push('/dashboard')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto border-blue-100 overflow-hidden bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-100 to-green-100">
          <CardTitle className="text-3xl font-bold text-center text-gray-800">User Verification</CardTitle>
          <CardDescription className="text-center text-gray-600">Complete verification to continue</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-6">
            {!isVerified ? (
              <>
                <p className="text-center text-gray-600">
                  To ensure the integrity of our community, we require user verification. Please complete the verification process.
                </p>
                <Button 
                  className="vibrant-button"
                  onClick={handleVerificationSuccess}
                >
                  Verify Account
                </Button>
              </>
            ) : (
              <>
                <p className="text-center text-green-600 font-semibold">
                  Verification successful! Thank you for verifying your identity.
                </p>
                <Button className="vibrant-button" onClick={() => window.location.href = '/'}>
                  Continue to Dashboard
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}