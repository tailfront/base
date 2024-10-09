/**
 * @file input-otp.tsx
 * @overview Sanbox of components.
 */

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/input-otp';
import { Label } from '@/components/label';

/**
 * @returns {JSX.Element} Example of input otp usage
 * @example
	import {InputOTPExample} from '@/examples/input-otp.tsx';

	<InputOTPExample />
 */
function InputOTPExample(): JSX.Element {
  document.title = 'Input OTP';
  return (
    <div className="bg-white m-8 p-4 flex gap-10 items-center">
      <div>
        <Label>Label</Label>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div>
        <Label>Label</Label>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0}></InputOTPSlot>
            <InputOTPSlot index={1}></InputOTPSlot>
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2}></InputOTPSlot>
            <InputOTPSlot index={3}></InputOTPSlot>
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4}></InputOTPSlot>
            <InputOTPSlot index={5}></InputOTPSlot>
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div>
        <Label>Label</Label>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0}></InputOTPSlot>
            <InputOTPSlot index={1}></InputOTPSlot>
            <InputOTPSlot index={2}></InputOTPSlot>
            <InputOTPSlot index={3}></InputOTPSlot>
            <InputOTPSlot index={4}></InputOTPSlot>
            <InputOTPSlot index={5}></InputOTPSlot>
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}

export { InputOTPExample };
