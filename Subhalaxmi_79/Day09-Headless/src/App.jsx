import { Dialog } from '@headlessui/react';

<Dialog open={isOpen} onClose={closeModal}>
  <Dialog.Panel className="bg-white p-4 rounded shadow">
    <p>Book details here</p>
  </Dialog.Panel>
</Dialog>