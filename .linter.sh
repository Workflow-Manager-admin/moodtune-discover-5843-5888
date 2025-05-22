#!/bin/bash
cd /home/kavia/workspace/code-generation/moodtune-discover-5843-5888/main_container_for_moodtune_discover
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

