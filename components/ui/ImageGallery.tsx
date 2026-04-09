'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
  alt: string
  isMobile?: boolean
}

/**
 * Image Gallery Component for displaying multiple project screenshots
 */
export function ImageGallery({ images, alt, isMobile = false }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!images || images.length === 0) return null

  return (
    <div className="space-y-4">
      {/* Main Image Preview */}
      <div className={`relative ${isMobile ? 'aspect-[9/16] max-h-[600px]' : 'aspect-video'} w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800`}>
        <Image
          src={images[selectedImage]}
          alt={`${alt} - Screenshot ${selectedImage + 1}`}
          fill
          className={`${isMobile ? 'object-contain' : 'object-cover'} transition-all duration-500`}
          priority
        />
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative flex-shrink-0 ${isMobile ? 'w-20 h-36' : 'w-24 h-16'} rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? 'border-blue-500 ring-2 ring-blue-500/20 scale-95'
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <Image
                src={image}
                alt={`${alt} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {selectedImage !== index && (
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
