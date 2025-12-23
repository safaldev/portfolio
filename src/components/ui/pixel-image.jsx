import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

const DEFAULT_GRIDS = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "6x6": { rows: 6, cols: 6 },
}

export const PixelImage = ({
  src,
  grid = "6x6",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  customGrid
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showColor, setShowColor] = useState(false)

  const MIN_GRID = 1
  const MAX_GRID = 16

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid) => {
      if (!grid) return false
      const { rows, cols } = grid
      return (Number.isInteger(rows) &&
      Number.isInteger(cols) &&
      rows >= MIN_GRID &&
      cols >= MIN_GRID &&
      rows <= MAX_GRID && cols <= MAX_GRID);
    }

    return isValidGrid(customGrid) ? customGrid : DEFAULT_GRIDS[grid];
  }, [customGrid, grid])

  useEffect(() => {
    setIsVisible(true)
    const colorTimeout = setTimeout(() => {
      setShowColor(true)
    }, colorRevealDelay)
    return () => clearTimeout(colorTimeout);
  }, [colorRevealDelay])

  const pieces = useMemo(() => {
    const total = rows * cols
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`

      const delay = Math.random() * maxAnimationDelay *1.2
      return {
        clipPath,
        delay,
      }
    });
  }, [rows, cols, maxAnimationDelay])

  return (
    <div className="relative h-72 w-72 select-none md:h-96 md:w-96 hover:-translate-y-2 transition-all duration-300 shadow-2xl rounded-full hover:shadow-primary/50">
      {pieces.map((piece, index) => (
        <div
          key={index}
          className={cn(
            "absolute justify-center text-center inset-0 transition-all ease-out",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{
            clipPath: piece.clipPath,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}>
          <img
            src={src}
            alt={`Pixel image piece ${index + 1}`}
            className={cn(
              "z-1 w-full h-full rounded-[100%] object-cover border-8 border-cyan-600",
              grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale")
            )}
            
            style={{
              transition: grayscaleAnimation
                ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
            }}
            draggable={false} />
        </div>
      ))}
    </div>
  );
}
