import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Section = forwardRef(function Section(
  props: SectionProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const { children, className, ...rest } = props;
  return (
    <section
      ref={ref}
      className={['py-20', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </section>
  );
});

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function SectionHeader({ children, className, ...rest }: SectionHeaderProps) {
  return (
    <div
      className={['mx-auto mb-16 max-w-3xl text-center', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}

interface SectionGoalProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

function SectionGoal({ children, className, ...rest }: SectionGoalProps) {
  return (
    <span
      className={[
        'rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

function SectionTitle({ children, className, ...rest }: SectionTitleProps) {
  return (
    <h2
      className={[
        'mb-6 mt-4 text-3xl font-bold text-foreground md:text-4xl',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </h2>
  );
}

interface SectionDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function SectionDescription({
  children,
  className,
  ...rest
}: SectionDescriptionProps) {
  return (
    <p
      className={['text-lg text-muted-foreground', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </p>
  );
}

interface SectionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function SectionContent({ children, className, ...rest }: SectionContentProps) {
  return (
    <div className={['', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}

export {
  Section,
  SectionHeader,
  SectionGoal,
  SectionTitle,
  SectionDescription,
  SectionContent,
};
