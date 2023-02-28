import { PencilIcon, BoltIcon, CheckIcon, CloudIcon, PaperAirplaneIcon, EyeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

import generateImg from '@/images/generate.png'
import styleImg from '@/images/style.png'
import adaptImg from '@/images/adapt.png'

import conceptImg from '@/images/concept.png'
import assetsImg from '@/images/assets.jpeg'
import animationImg from '@/images/animation.png'
import environmentImg from '@/images/environment.jpeg'

const features = [

  {
    name: 'Concept Art',
    description:
      'Focus on creative thinking not repetitive drawing.',
    href: '#',
    icon: CloudIcon,
    image: conceptImg
  },
  {
    name: '2D / 3D Assets',
    description:
      'Create thousands of assets in your art style.',
    href: '#',
    icon: PencilIcon,
    image: assetsImg
  },
  {
    name: '2D / 3D Animations',
    description:
      'Complex character animations in less time.',
    href: '#',
    icon: PaperAirplaneIcon,
    image: animationImg
  },
  {
    name: 'Level & Environment Design',
    description:
      'Easy environments- and levels for a great gameplay experience.',
    href: '#',
    icon: EyeIcon,
    image: environmentImg
  },
]

export function PrimaryFeatures() {
  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-violet-700" aria-hidden="true" />
                  {feature.name}
                </dt>
                <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </div>
                <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <Image className="w-full" src={feature.image}></Image>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
