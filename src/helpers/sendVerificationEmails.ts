import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verificationCode: string
) : Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'AnonMsgs | Verification code',
            react: VerificationEmail({username:username, otp:verificationCode})
        })

        return {success: true, message: 'Verification mail sent successfully'}
    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {success: false, message: 'Failed to send verification email.'}

    }
}
