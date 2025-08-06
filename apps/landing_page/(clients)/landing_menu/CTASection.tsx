import ButtonComponent from "@repo/ui/button";

export default function CTASection () {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start creating?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using DrawFlow to bring their ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button className='cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors px-6 py-3 '>argaerg</button> */}
            <ButtonComponent title='Start Free Trial' size='large' variant='tertiary' />
            <ButtonComponent title='Contact Sales' size='large' variant='Quaternary' />
          </div>
        </div>
    )
}