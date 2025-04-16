export const Section1 = ({ inView }: { inView: boolean }) => {
    return (
      <div className="flex gap-x-12 items-center flex-col md:flex-row h-[50vh]">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Best For: Chats, Essays, Notes</h3>
          <div className="space-y-6 text-neutral-100 dark:text-neutral-900">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex gap-4 hover-target"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-background flex items-center justify-center text-neutral-300">
                  {useCase.icon}
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-neutral-900 dark:text-neutral-300">{useCase.title}</h4>
                  <p className="text-sm text-neutral-900 dark:text-neutral-300">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
  
        </div >
        <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5}}
        className="h-full bg-neutral-300 rounded-2xl m-auto">
  
          <Image
            height={480}
            width={480}
            src="/schematic-3.png"
            alt="schematic"
          />
        </motion.div>
  
      </div>
    )
  }