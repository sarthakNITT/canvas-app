import ButtonComponent from "@repo/ui/button";
import { 
    MousePointer2,
    Layers,
    Undo2
} from 'lucide-react';

export default function DemoSection () {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See it in action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how easy it is to create beautiful diagrams in seconds
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-12 text-center">
              <div className="flex justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                  <MousePointer2 className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                  <Undo2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Demo</h3>
              <p className="text-gray-600 mb-6">
                Experience the power of our drawing tools with this interactive demo
              </p>
              {/* <button className='cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors px-6 py-3 '>argaerg</button> */}
              <ButtonComponent title='Launch Demo' variant='primary' size='medium' />
            </div>
          </div>
        </div>
    )
}