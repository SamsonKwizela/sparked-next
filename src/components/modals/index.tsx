"use client";

import UiStore from "@state/mobx/uiStore";
import { Button, Modal } from "flowbite-react";
import i18next from "i18next";
import { observer } from "mobx-react-lite";

export const ConfirmDialog = observer(() => {
  const {
    confirmDialogVisibility,
    setConfirmDialogVisibility,
    setConfirmDialogStatus,
    confirmDialogTitle,
  } = UiStore;

  return (
    <>
      <Modal
        show={confirmDialogVisibility}
        onClose={() => setConfirmDialogVisibility(false)}
      >
        <Modal.Header>{confirmDialogTitle}</Modal.Header>
        <Modal.Footer>
          <Button onClick={() => setConfirmDialogStatus(true)}>
            {i18next.t("yes")}
          </Button>
          <Button
            color="gray"
            onClick={() => setConfirmDialogVisibility(false)}
          >
            {i18next.t("cancel")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});
