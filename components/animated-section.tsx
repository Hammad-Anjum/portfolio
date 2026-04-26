"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimatedSectionProps = {
  id?: string
  className?: string
  children: ReactNode
  delay?: number
}

const ease = [0.22, 1, 0.36, 1] as const

export function AnimatedSection({ id, className, children, delay = 0 }: AnimatedSectionProps) {
  const reduce = useReducedMotion()
  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.section>
  )
}

type AnimatedItemProps = {
  className?: string
  children: ReactNode
  delay?: number
}

export function AnimatedItem({ className, children, delay = 0 }: AnimatedItemProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  className?: string
  children: ReactNode
  stagger?: number
  delayChildren?: number
}

export function StaggerContainer({ className, children, stagger = 0.08, delayChildren = 0 }: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  }
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChild({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion()
  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  }
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  )
}
