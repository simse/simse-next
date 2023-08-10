import dynamic from 'next/dynamic';

import WritingSection from '@/components/periods/writing/WritingSection';

const PortabilitySection = dynamic(() => import('@/components/periods/portability/PortabilitySection'));

export default function Home() {
  return (
    <main>
      <WritingSection />

      <PortabilitySection />
    </main>
  )
}
