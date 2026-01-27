import * as Dialog from "@radix-ui/react-dialog";

function App() {
  return (
    <div className="p-6">
      <Dialog.Root>
        <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded">
          Open Dialog
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg font-bold">
              Day 09 – Headless UI
            </Dialog.Title>
            <Dialog.Close className="mt-4 px-3 py-1 bg-red-500 text-white rounded">
              Close
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
