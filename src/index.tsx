
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

export interface NeonicHeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundImage?: string
  showGithubButton?: boolean
  githubLink?: string
  glowColor?: string
  textGlowColor?: string
  animationSpeed?: "slow" | "medium" | "fast"
  animationStyle?: "fade" | "slide" | "scale" | "bounce"
  layout?: "centered" | "left" | "right"
  darkMode?: boolean
  onPrimaryButtonClick?: () => void
  onSecondaryButtonClick?: () => void
}

// Button component for internal use
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline"
    size?: "default" | "sm" | "lg" | "icon"
    asChild?: boolean
  }
>(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  return (
    <Comp
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    />
  )
})
Button.displayName = "Button"

// Link component for internal use
const Link = ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => {
  return <a href={href} {...props} />
}

// Image component for internal use
const Image = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  fill?: boolean
  priority?: boolean
}) => {
  const imgStyle: React.CSSProperties = fill
    ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: "cover" }
    : {}

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={imgStyle}
      {...(priority ? { fetchPriority: "high" } : {})}
      {...props}
    />
  )
}

// Icon components
const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const ExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
)

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export default function NeonicHero({
  title = "Build the future with stunning UI",
  subtitle = "NEXT GENERATION",
  description = "Create immersive digital experiences with our futuristic component library. Perfect for modern web applications.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#",
  backgroundImage = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1920&auto=format&fit=crop",
  showGithubButton = true,
  githubLink = "https://github.com",
  glowColor = "#0ea5e9",
  textGlowColor = "#0ea5e9",
  animationSpeed = "medium",
  animationStyle = "fade",
  layout = "centered",
  darkMode = true,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: NeonicHeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Animation duration based on speed
  const duration = {
    slow: 1.2,
    medium: 0.8,
    fast: 0.5,
  }

  // Animation variants based on style
  const getVariants = (delay = 0) => {
    switch (animationStyle) {
      case "slide":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: duration[animationSpeed],
              delay,
            },
          },
        }
      case "scale":
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: duration[animationSpeed],
              delay,
            },
          },
        }
      case "bounce":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay,
            },
          },
        }
      default: // fade
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: duration[animationSpeed],
              delay,
            },
          },
        }
    }
  }

  // Layout class based on alignment
  const layoutClass = {
    centered: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  }

  // Glow styles
  const glowStyles = {
    boxShadow: `0 0 15px ${glowColor}, 0 0 30px ${glowColor}80, 0 0 45px ${glowColor}40`,
    textShadow: `0 0 5px ${textGlowColor}, 0 0 10px ${textGlowColor}80`,
  }

  const buttonGlowStyles = {
    boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}60`,
  }

  return (
    <div className={`relative overflow-hidden ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"
          style={{
            background: darkMode
              ? `linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)`
              : `linear-gradient(45deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)`,
          }}
        />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full opacity-20"
          style={{
            width: "300px",
            height: "300px",
            border: `2px solid ${glowColor}`,
            top: "10%",
            left: "5%",
            filter: `blur(2px)`,
            boxShadow: `0 0 30px ${glowColor}80`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute opacity-10"
          style={{
            width: "200px",
            height: "200px",
            border: `2px solid ${glowColor}`,
            bottom: "15%",
            right: "10%",
            filter: `blur(1px)`,
            boxShadow: `0 0 20px ${glowColor}80`,
            transform: "rotate(45deg)",
          }}
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute opacity-15"
          style={{
            width: "150px",
            height: "3px",
            backgroundColor: glowColor,
            top: "60%",
            left: "20%",
            filter: `blur(1px)`,
            boxShadow: `0 0 15px ${glowColor}`,
          }}
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className={`max-w-5xl mx-auto flex flex-col ${layoutClass[layout]} gap-8`}>
          <AnimatePresence>
            <motion.div
              key="subtitle"
              initial="hidden"
              animate="visible"
              variants={getVariants(0)}
              className="overflow-hidden"
            >
              <span
                className="inline-block text-sm sm:text-base font-medium tracking-widest mb-2 px-4 py-1 rounded-full border"
                style={{
                  borderColor: glowColor,
                  ...glowStyles,
                }}
              >
                {subtitle}
              </span>
            </motion.div>

            <motion.h1
              key="title"
              initial="hidden"
              animate="visible"
              variants={getVariants(0.1)}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              style={{
                textShadow: glowStyles.textShadow,
              }}
            >
              {title}
            </motion.h1>

            <motion.p
              key="description"
              initial="hidden"
              animate="visible"
              variants={getVariants(0.2)}
              className="max-w-2xl text-lg sm:text-xl opacity-90 mt-2"
            >
              {description}
            </motion.p>

            <motion.div
              key="buttons"
              initial="hidden"
              animate="visible"
              variants={getVariants(0.3)}
              className={`flex flex-wrap gap-4 mt-4 ${layout === "centered" ? "justify-center" : layout === "right" ? "justify-end" : "justify-start"}`}
            >
              <Button
                className="relative group overflow-hidden h-10 px-8 text-sm font-medium text-white"
                style={{
                  backgroundColor: glowColor,
                  border: "none",
                  ...buttonGlowStyles,
                }}
                onClick={onPrimaryButtonClick}
              >
                <Link href={primaryButtonLink} className="flex items-center">
                  <span className="relative z-10 flex items-center">
                    {primaryButtonText}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                className="relative group h-10 px-8 text-sm font-medium border"
                style={{
                  borderColor: glowColor,
                  color: darkMode ? "white" : "black",
                  background: "transparent",
                }}
                onClick={onSecondaryButtonClick}
              >
                <Link href={secondaryButtonLink} className="flex items-center">
                  <span className="relative z-10 flex items-center">
                    {secondaryButtonText}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>

              {showGithubButton && (
                <Button
                  className="relative group h-10 w-10 flex items-center justify-center border"
                  style={{
                    borderColor: glowColor,
                    color: darkMode ? "white" : "black",
                    background: "transparent",
                  }}
                >
                  <Link href={githubLink} className="flex items-center justify-center w-full h-full">
                    <span className="relative z-10">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </span>
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(${glowColor}20 1px, transparent 1px), linear-gradient(90deg, ${glowColor}20 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  )
}
