import UserInformation from '@/components/UserInformation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex">
      <section>
        <UserInformation />
      </section>

      <section>
        {/* Post Form */}
        {/* Post Feed */}
      </section>

      <section>{/* Widget */}</section>
    </div>
  );
}
