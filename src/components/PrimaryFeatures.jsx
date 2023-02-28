import { PencilIcon, BoltIcon, CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

import generateImg from '@/images/generate.png'
import styleImg from '@/images/style.png'
import adaptImg from '@/images/adapt.png'

const features = [

  {
    name: 'Choose your style',
    description:
      'Select an art style from our library or apply your own by uploading your game art.',
    href: '#',
    icon: CheckIcon,
    image: styleImg
  },
  {
    name: 'Generate assets',
    description:
      'Generate game assets and then choose your favorite AI-generated variation.',
    href: '#',
    icon: BoltIcon,
    image: generateImg
  },
  {
    name: 'Adapt & stay in control',
    description:
      'Make changes or edits to the assets during or after the design process.',
    href: '#',
    icon: PencilIcon,
    image: adaptImg
  },
]

export function PrimaryFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
